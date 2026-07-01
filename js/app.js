/**
 * TM PrimePress Single EOM - 主应用逻辑
 * 页面渲染、事件绑定、初始化
 */

const App = {
  currentPage: null,
  backRoute: 'home',
  titleStack: [],

  // ==================== 初始化 ====================
  init() {
    this.cacheDom();
    this.bindEvents();
    this.defineRoutes();
    Router.init();
    this.registerServiceWorker();
  },

  cacheDom() {
    this.$headerTitle = document.getElementById('header-title');
    this.$mainContent = document.getElementById('main-content');
    this.$btnBack = document.getElementById('btn-back');
    this.$btnSearch = document.getElementById('btn-search');
    this.$searchOverlay = document.getElementById('search-overlay');
    this.$searchInput = document.getElementById('search-input');
    this.$searchResults = document.getElementById('search-results');
    this.$btnSearchClose = document.getElementById('btn-search-close');
    this.$imageModal = document.getElementById('image-modal');
    this.$imageModalImg = document.getElementById('image-modal-img');
    this.$imageModalCaption = document.getElementById('image-modal-caption');
    this.$btnImageClose = document.getElementById('btn-image-close');
    this.$bottomNav = document.getElementById('bottom-nav');
  },

  bindEvents() {
    // 返回按钮
    this.$btnBack.addEventListener('click', () => {
      if (this.$searchOverlay.classList.contains('hidden')) {
        Router.back();
      }
    });

    // 搜索按钮
    this.$btnSearch.addEventListener('click', () => this.openSearch());

    // 搜索关闭
    this.$btnSearchClose.addEventListener('click', () => this.closeSearch());

    // 搜索输入
    let searchTimeout;
    this.$searchInput.addEventListener('input', (e) => {
      clearTimeout(searchTimeout);
      searchTimeout = setTimeout(() => this.performSearch(e.target.value), 200);
    });

    // 图片弹窗关闭
    this.$btnImageClose.addEventListener('click', () => this.closeImage());
    document.querySelector('.image-modal-bg').addEventListener('click', () => this.closeImage());

    // 底部导航
    this.$bottomNav.querySelectorAll('.nav-item').forEach(btn => {
      btn.addEventListener('click', () => {
        const route = btn.dataset.route;
        Router.navigate(route);
        this.updateBottomNav(route);
      });
    });

    // 委托点击事件（用于动态生成的卡片）
    this.$mainContent.addEventListener('click', (e) => {
      const card = e.target.closest('[data-route]');
      if (card) {
        const route = card.dataset.route;
        if (route) {
          // 如果带有参数，直接使用
          if (route.includes('?')) {
            const [r, q] = route.split('?');
            const params = {};
            new URLSearchParams(q).forEach((v, k) => { params[k] = v; });
            Router.navigate(r, params);
          } else {
            Router.navigate(route);
          }
        }
      }

      // 面包屑点击
      const bc = e.target.closest('.breadcrumb span[data-route]');
      if (bc) {
        Router.navigate(bc.dataset.route);
      }
    });

    // 搜索页面的委托点击
    this.$searchResults.addEventListener('click', (e) => {
      const item = e.target.closest('.search-result-item');
      if (item && item.dataset.route) {
        this.closeSearch();
        Router.navigate(item.dataset.route);
      }
    });
  },

  // ==================== 路由定义 ====================
  defineRoutes() {
    // 首页
    Router.on('home', () => this.renderHome());

    // 技术参数
    Router.on('tech-data', () => this.renderTechData());

    // 设备描述
    Router.on('components', () => this.renderComponents());

    // 设备部件详情
    Router.on('component-detail', (params) => this.renderComponentDetail(params));

    // 维护首页
    Router.on('maintenance', () => this.renderMaintenance());

    // 维护子页面
    Router.on('maintenance-detail', (params) => this.renderMaintenanceDetail(params));

    // 搜索（路由触发时打开搜索浮层）
    Router.on('search', () => this.openSearch());
  },

  // ==================== 页面渲染 ====================

  /** 首页 */
  renderHome() {
    this.setTitle('TM PrimePress Single EOM');
    this.setBackRoute(null);
    this.updateBottomNav('home');

    const cards = [
      UI.categoryCard('📊', '技术参数', '网部、毛毯、真空压榨辊规格数据', 'tech-data'),
      UI.categoryCard('🔧', '设备描述', '主要部件结构、功能与技术描述', 'components'),
      UI.categoryCard('🛠', '维护操作', '安全条例、检查维护、更换步骤', 'maintenance'),
    ];

    const html = `
      <div style="padding:4px 0">
        <div style="text-align:center;margin-bottom:16px">
          <p style="font-size:0.8rem;color:var(--color-text-secondary)">
            ANDRITZ PrimePress 压榨部 · 操作与维护说明书
          </p>
          <p style="font-size:0.7rem;color:var(--color-text-light);margin-top:2px">
            C&S Paper (Jiangsu) Co., Ltd. | Rev. 0 | 2026
          </p>
        </div>
        ${cards.join('')}
      </div>
    `;

    this.render(html);
  },

  /** 技术参数页 */
  renderTechData() {
    this.setTitle('技术参数');
    this.setBackRoute('home');
    this.updateBottomNav('tech-data');

    const td = APP_DATA.technicalData;

    const html = `
      ${UI.breadcrumb([{ label: '首页', route: 'home' }, { label: '技术参数' }])}

      ${td.sections.map(section => {
        if (section.type === 'text') {
          return `<div class="card">${section.content}</div>`;
        }
        return UI.dataTableCard(section.title, section.rows, section.sub);
      }).join('')}

      ${td.note ? `<p style="font-size:0.7rem;color:var(--color-text-light);margin-top:8px">${td.note}</p>` : ''}
    `;

    this.render(html);
  },

  /** 设备描述首页 */
  renderComponents() {
    this.setTitle('设备描述');
    this.setBackRoute('home');
    this.updateBottomNav('components');

    const cd = APP_DATA.components;

    let html = UI.breadcrumb([{ label: '首页', route: 'home' }, { label: '设备描述' }]);

    // 应用领域
    if (cd.application) {
      html += `
        <div class="card section-group">
          <div class="card-title">📋 ${cd.application.title}</div>
          ${UI.bilingual(cd.application.cn, cd.application.en)}
          ${cd.application.image ? UI.figure(cd.application.image, cd.application.imageCaption) : ''}
        </div>
      `;
    }

    // 主要部件总览
    if (cd.overview) {
      html += `
        <div class="card section-group">
          <div class="card-title">🔩 ${cd.overview.title}</div>
          ${cd.overview.items ? cd.overview.items.map((item, i) =>
            UI.subCard('', `${item.num || i+1}. ${item.name}`, item.en, item.route)
          ).join('') : ''}
          ${cd.overview.image ? UI.figure(cd.overview.image, cd.overview.imageCaption) : ''}
        </div>
      `;
    }

    // 技术描述
    if (cd.techDescription) {
      html += `
        <div class="card section-group">
          <div class="card-title">⚙️ ${cd.techDescription.title}</div>
          ${UI.bilingual(cd.techDescription.cn, cd.techDescription.en)}
        </div>
      `;
    }

    // 真空压榨辊功能
    if (cd.suctionRollFunction) {
      html += `
        <div class="card section-group">
          <div class="card-title">🔬 ${cd.suctionRollFunction.title}</div>
          ${UI.bilingual(cd.suctionRollFunction.cn, cd.suctionRollFunction.en)}
          ${cd.suctionRollFunction.subsections ? cd.suctionRollFunction.subsections.map(sub => `
            <div style="margin-top:10px">
              <strong style="font-size:0.82rem;color:var(--color-primary)">${sub.title}</strong>
              ${UI.bilingual(sub.cn, sub.en)}
            </div>
          `).join('') : ''}
        </div>
      `;
    }

    this.render(html);
  },

  /** 部件详情页 */
  renderComponentDetail(params) {
    const compId = params.id;
    const comp = APP_DATA.components.componentDetails[compId];

    if (!comp) {
      this.render(`<div class="empty-state"><span class="empty-icon">🔍</span>未找到该部件信息</div>`);
      return;
    }

    this.setTitle(comp.title || compId);
    this.setBackRoute('components');

    let html = UI.breadcrumb([
      { label: '首页', route: 'home' },
      { label: '设备描述', route: 'components' },
      { label: comp.title || compId }
    ]);

    // 描述
    if (comp.description) {
      html += `<div class="card">${UI.bilingual(comp.description.cn, comp.description.en)}</div>`;
    }

    // 图片
    if (comp.image) {
      html += UI.figure(comp.image, comp.imageCaption);
    }

    // 部件子项（如真空压榨辊的子部件）
    if (comp.parts) {
      var partsRows = comp.parts.map(function(p) {
        var enHtml = p.en ? '<br><span style="font-size:0.7rem;color:var(--color-text-secondary)">' + p.en + '</span>' : '';
        return '<tr><td>' + p.id + '</td><td>' + p.name + enHtml + '</td></tr>';
      }).join('');
      html += '<div class="card"><div class="card-title">部件组成</div>';
      html += '<div class="table-wrapper"><table>';
      html += '<thead><tr><th>项目</th><th>组件</th></tr></thead>';
      html += '<tbody>' + partsRows + '</tbody>';
      html += '</table></div></div>';
    }

    // 子章节详情
    if (comp.subsections) {
      for (const sub of comp.subsections) {
        html += `<div class="card section-group">`;
        html += `<div class="card-title">${sub.title}</div>`;
        if (sub.cn) html += UI.bilingual(sub.cn, sub.en);
        if (sub.image) html += UI.figure(sub.image, sub.imageCaption);
        if (sub.items) {
          html += `<ul style="padding-left:18px;font-size:0.85rem">`;
          sub.items.forEach(item => {
            html += `<li style="margin:4px 0">${item}</li>`;
          });
          html += `</ul>`;
        }
        html += `</div>`;
      }
    }

    // 功能/设计
    if (comp.function) {
      html += `<div class="card">${UI.bilingual(comp.function.cn, comp.function.en)}</div>`;
    }
    if (comp.design) {
      html += `<div class="card">${UI.bilingual(comp.design.cn, comp.design.en)}</div>`;
    }

    this.render(html);
  },

  /** 维护首页 */
  renderMaintenance() {
    this.setTitle('维护');
    this.setBackRoute('home');
    this.updateBottomNav('maintenance');

    const md = APP_DATA.maintenance;

    let html = UI.breadcrumb([{ label: '首页', route: 'home' }, { label: '维护' }]);

    // 维护主题卡片
    if (md.topics) {
      for (const [id, topic] of Object.entries(md.topics)) {
        html += UI.subCard(topic.icon || '📋', topic.title, topic.subtitle, `maintenance-detail?id=${id}`);
      }
    }

    // 维护操作步骤
    if (md.procedures) {
      for (const [id, proc] of Object.entries(md.procedures)) {
        html += UI.subCard(proc.icon || '🔧', proc.title, proc.subtitle, `maintenance-detail?id=${id}`);
      }
    }

    this.render(html);
  },

  /** 维护详情页 */
  renderMaintenanceDetail(params) {
    const topicId = params.id;
    const md = APP_DATA.maintenance;

    // 先在 topics 中查找
    let topic = md.topics ? md.topics[topicId] : null;

    // 再在 procedures 中查找
    if (!topic && md.procedures) {
      topic = md.procedures[topicId];
    }

    if (!topic) {
      this.render(`<div class="empty-state"><span class="empty-icon">🔍</span>未找到该内容</div>`);
      return;
    }

    this.setTitle(topic.title || topicId);
    this.setBackRoute('maintenance');

    let html = UI.breadcrumb([
      { label: '首页', route: 'home' },
      { label: '维护', route: 'maintenance' },
      { label: topic.title || topicId }
    ]);

    // 警告/注意事项
    if (topic.alerts) {
      for (const alert of topic.alerts) {
        html += UI.alert(alert.type, alert.title, alert.content);
      }
    }

    // 概述/注意事项
    if (topic.notes) {
      html += UI.noticeList(topic.notes);
    }

    // 前提条件 / 准备
    if (topic.prerequisites) {
      html += `<div class="card"><div class="card-title">📋 前提条件 / Prerequisites</div>`;
      html += `<ul style="padding-left:18px;font-size:0.85rem">`;
      topic.prerequisites.forEach(p => {
        html += `<li style="margin:4px 0">${p.cn || p} ${p.en ? `<span style="color:var(--color-text-secondary);font-size:0.75rem">${p.en}</span></li>` : ''}`;
      });
      html += `</ul></div>`;
    }

    // 准备工具
    if (topic.tools) {
      html += `<div class="card"><div class="card-title">🔧 准备工具 / Tools</div>`;
      html += `<p style="font-size:0.85rem">${topic.tools.join(' · ')}</p></div>`;
    }

    // 数据表
    if (topic.rows) {
      html += UI.dataTableCard(topic.dataTitle || '', topic.rows);
    }

    // 内容文字
    if (topic.content) {
      html += `<div class="card">${UI.bilingual(topic.content.cn, topic.content.en)}</div>`;
    }

    // 段落
    if (topic.paragraphs) {
      for (const p of topic.paragraphs) {
        html += `<div class="card">${UI.bilingual(p.cn, p.en)}</div>`;
      }
    }

    // 步骤
    if (topic.steps) {
      html += UI.stepFlow(topic.steps);
    }

    // 子章节（带步骤的详细流程）
    if (topic.sections) {
      for (const section of topic.sections) {
        html += `<div class="section-group">`;
        html += `<h3 style="font-size:0.9rem;font-weight:700;color:var(--color-primary-dark);margin:12px 0 8px">${section.title}</h3>`;
        if (section.alerts) {
          for (const alert of section.alerts) {
            html += UI.alert(alert.type, alert.title, alert.content);
          }
        }
        if (section.paragraphs) {
          for (const p of section.paragraphs) {
            html += `<div style="margin-bottom:8px;font-size:0.85rem;color:var(--color-text-secondary)">${p.cn || p}</div>`;
          }
        }
        if (section.steps) {
          html += UI.stepFlow(section.steps);
        }
        if (section.image) {
          html += UI.figure(section.image, section.imageCaption);
        }
        if (section.tips) {
          for (const tip of section.tips) {
            html += UI.alert(tip.type || 'info', tip.title || '', tip.content || tip.cn || tip);
          }
        }
        if (section.table) {
          html += UI.table(section.table.headers, section.table.rows);
        }
        html += `</div>`;
      }
    }

    // 图片
    if (topic.images) {
      for (const img of topic.images) {
        html += UI.figure(img.src, img.caption);
      }
    }
    if (topic.image) {
      html += UI.figure(topic.image, topic.imageCaption);
    }

    // 子主题
    if (topic.children) {
      for (const child of topic.children) {
        html += UI.subCard(child.icon || '', child.title, child.subtitle || '', child.route);
      }
    }

    // 表格
    if (topic.table) {
      html += UI.table(topic.table.headers, topic.table.rows);
    }

    // 底部提示
    if (topic.footerNote) {
      html += UI.alert('info', '', topic.footerNote);
    }

    this.render(html);
  },

  // ==================== 搜索 ====================
  openSearch() {
    this.$searchOverlay.classList.remove('hidden');
    this.$searchInput.value = '';
    this.$searchResults.innerHTML = '<p class="search-hint">输入关键词开始搜索</p>';
    setTimeout(() => this.$searchInput.focus(), 100);
  },

  closeSearch() {
    this.$searchOverlay.classList.add('hidden');
    this.$searchInput.value = '';
  },

  performSearch(query) {
    if (!query.trim()) {
      this.$searchResults.innerHTML = '<p class="search-hint">输入关键词开始搜索</p>';
      return;
    }

    const results = Search.search(query);

    if (results.length === 0) {
      this.$searchResults.innerHTML = `
        <div class="empty-state">
          <span class="empty-icon">🔍</span>
          <p>未找到"${query}"相关内容</p>
          <p style="font-size:0.75rem;margin-top:4px">请尝试其他关键词</p>
        </div>
      `;
      return;
    }

    this.$searchResults.innerHTML = `
      <p style="font-size:0.75rem;color:var(--color-text-light);margin-bottom:8px">
        找到 ${results.length} 条结果
      </p>
      ${results.map(r => `
        <div class="search-result-item" data-route="${r.route}">
          <div class="search-result-title">${r.title}</div>
          <div class="search-result-preview">${r.preview}</div>
          <div class="search-result-section">📂 ${r.section}</div>
        </div>
      `).join('')}
    `;
  },

  // ==================== 图片弹窗 ====================
  openImage(src, caption) {
    this.$imageModalImg.src = src;
    this.$imageModalCaption.textContent = caption || '';
    this.$imageModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  },

  closeImage() {
    this.$imageModal.classList.add('hidden');
    document.body.style.overflow = '';
  },

  // ==================== UI 辅助 ====================
  render(html) {
    this.$mainContent.innerHTML = html;
    this.$mainContent.scrollTop = 0;
  },

  setTitle(title) {
    this.$headerTitle.textContent = title;
    document.title = title + ' - Press EOM';
  },

  setBackRoute(route) {
    this.backRoute = route;
    if (route) {
      this.$btnBack.style.visibility = 'visible';
    } else {
      this.$btnBack.style.visibility = 'hidden';
    }
  },

  updateBottomNav(activeRoute) {
    this.$bottomNav.querySelectorAll('.nav-item').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.route === activeRoute);
    });
  },

  // ==================== Service Worker ====================
  registerServiceWorker() {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('sw.js')
        .then(reg => console.log('SW registered:', reg.scope))
        .catch(err => console.log('SW registration failed:', err));
    }
  }
};

// ==================== 启动应用 ====================
document.addEventListener('DOMContentLoaded', () => {
  // 等待数据加载完成后初始化
  if (window.APP_DATA) {
    Search.init();
  }
  App.init();
});
