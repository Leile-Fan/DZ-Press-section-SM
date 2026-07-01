/**
 * TM EOM Suite - 主应用逻辑
 * Tissue Machine 操作维护说明书 · 多机器支持
 */

const App = {
  currentMachine: 'press',
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
    this.$btnBack.addEventListener('click', () => {
      if (this.$searchOverlay.classList.contains('hidden')) Router.back();
    });
    this.$btnSearch.addEventListener('click', () => this.openSearch());
    this.$btnSearchClose.addEventListener('click', () => this.closeSearch());

    let searchTimeout;
    this.$searchInput.addEventListener('input', (e) => {
      clearTimeout(searchTimeout);
      searchTimeout = setTimeout(() => this.performSearch(e.target.value), 200);
    });

    this.$btnImageClose.addEventListener('click', () => this.closeImage());
    document.querySelector('.image-modal-bg').addEventListener('click', () => this.closeImage());

    this.$bottomNav.querySelectorAll('.nav-item').forEach(btn => {
      btn.addEventListener('click', () => {
        const route = btn.dataset.route;
        if (route === 'search') { this.openSearch(); return; }
        Router.navigate(route);
        this.updateBottomNav(route);
      });
    });

    this.$mainContent.addEventListener('click', (e) => {
      const card = e.target.closest('[data-route]');
      if (card) {
        const route = card.dataset.route;
        if (route) {
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
      const bc = e.target.closest('.breadcrumb span[data-route]');
      if (bc) Router.navigate(bc.dataset.route);
    });

    this.$searchResults.addEventListener('click', (e) => {
      const item = e.target.closest('.search-result-item');
      if (item && item.dataset.route) {
        this.closeSearch();
        Router.navigate(item.dataset.route);
      }
    });
  },

  // ==================== 数据访问 ====================
  getMachineData() {
    const m = APP_DATA.machines[this.currentMachine];
    return m ? m.data : null;
  },

  getMachineInfo() {
    return APP_DATA.machines[this.currentMachine] || null;
  },

  // ==================== 路由定义 ====================
  defineRoutes() {
    Router.on('home', () => this.renderHome());
    Router.on('select-machine', (params) => {
      if (params.id && APP_DATA.machines[params.id]) {
        this.currentMachine = params.id;
        this.renderMachineHome();
      } else {
        Router.navigate('home');
      }
    });
    Router.on('machine-home', () => this.renderMachineHome());
    Router.on('tech-data', () => this.renderTechData());
    Router.on('components', () => this.renderComponents());
    Router.on('component-detail', (params) => this.renderComponentDetail(params));
    Router.on('maintenance', () => this.renderMaintenance());
    Router.on('maintenance-detail', (params) => this.renderMaintenanceDetail(params));
    Router.on('search', () => this.openSearch());
  },

  // ==================== 首页 - 机器选择 ====================
  renderHome() {
    this.setTitle('TM EOM Suite');
    this.setBackRoute(null);
    this.updateBottomNav('home');

    const machines = APP_DATA.machines;
    let cards = '';
    for (const [id, m] of Object.entries(machines)) {
      cards += UI.machineCard(m.icon, m.title, m.subtitle, m.info, `select-machine?id=${id}`);
    }

    const html = `
      <div style="padding:4px 0">
        <div style="text-align:center;margin-bottom:16px">
          <p style="font-size:0.85rem;color:var(--color-text-secondary)">
            ANDRITZ 卫生纸机 · 操作与维护说明书
          </p>
          <p style="font-size:0.7rem;color:var(--color-text-light);margin-top:2px">
            C&S Paper (Jiangsu) Co., Ltd. | Rev. 0 | 2026
          </p>
        </div>
        <p style="font-size:0.78rem;color:var(--color-text-light);margin-bottom:12px;text-align:center">
          请选择要查看的设备文档
        </p>
        ${cards}
      </div>
    `;
    this.render(html);
  },

  // ==================== 机器首页 ====================
  renderMachineHome() {
    const mi = this.getMachineInfo();
    if (!mi) { Router.navigate('home'); return; }

    this.setTitle(mi.shortTitle || mi.title);
    this.setBackRoute('home');
    this.updateBottomNav('machine-home');

    const md = this.getMachineData();
    const sections = md ? md.sections : [];

    let html = UI.breadcrumb([
      { label: '首页', route: 'home' },
      { label: mi.title }
    ]);

    // 机器信息
    html += `<div style="text-align:center;margin-bottom:12px">
      <p style="font-size:0.78rem;color:var(--color-text-secondary)">${mi.subtitle}</p>
    </div>`;

    // 分类卡片
    for (const section of sections) {
      html += UI.categoryCard(section.icon, section.title, section.subtitle || '', section.route);
    }

    this.render(html);
  },

  // ==================== 技术参数 ====================
  renderTechData() {
    const mi = this.getMachineInfo();
    const md = this.getMachineData();
    if (!md || !md.technicalData) { Router.navigate('machine-home'); return; }

    this.setTitle('技术参数');
    this.setBackRoute('machine-home');
    this.updateBottomNav('tech-data');

    const td = md.technicalData;
    let html = UI.breadcrumb([
      { label: '首页', route: 'home' },
      { label: mi.title, route: 'machine-home' },
      { label: '技术参数' }
    ]);

    if (td.sections) {
      for (const section of td.sections) {
        if (section.type === 'text') {
          html += `<div class="card">${section.content}</div>`;
          if (section.image) html += UI.figure(section.image, section.imageCaption);
        } else {
          html += UI.dataTableCard(section.title, section.rows);
        }
      }
    }

    if (td.note) html += `<p style="font-size:0.7rem;color:var(--color-text-light);margin-top:8px">${td.note}</p>`;
    this.render(html);
  },

  // ==================== 设备描述 ====================
  renderComponents() {
    const mi = this.getMachineInfo();
    const md = this.getMachineData();
    if (!md || !md.components) { Router.navigate('machine-home'); return; }

    this.setTitle('设备描述');
    this.setBackRoute('machine-home');
    this.updateBottomNav('components');

    const cd = md.components;
    let html = UI.breadcrumb([
      { label: '首页', route: 'home' },
      { label: mi.title, route: 'machine-home' },
      { label: '设备描述' }
    ]);

    if (cd.application) {
      html += `<div class="card"><div class="card-title">📋 ${cd.application.title}</div>${UI.bilingual(cd.application.cn, cd.application.en)}${cd.application.image ? UI.figure(cd.application.image, cd.application.imageCaption) : ''}</div>`;
    }

    if (cd.overview) {
      html += `<div class="card"><div class="card-title">🔩 ${cd.overview.title}</div>`;
      if (cd.overview.items) {
        for (const item of cd.overview.items) {
          html += UI.subCard('', `${item.num || ''} ${item.name}`, item.en || '', item.route);
        }
      }
      if (cd.overview.image) html += UI.figure(cd.overview.image, cd.overview.imageCaption);
      html += `</div>`;
    }

    if (cd.techDescription) {
      html += `<div class="card"><div class="card-title">⚙️ ${cd.techDescription.title}</div>${UI.bilingual(cd.techDescription.cn, cd.techDescription.en)}</div>`;
    }

    if (cd.suctionRollFunction) {
      html += `<div class="card"><div class="card-title">🔬 ${cd.suctionRollFunction.title}</div>${UI.bilingual(cd.suctionRollFunction.cn, cd.suctionRollFunction.en)}`;
      if (cd.suctionRollFunction.subsections) {
        for (const sub of cd.suctionRollFunction.subsections) {
          html += `<div style="margin-top:10px"><strong style="font-size:0.82rem;color:var(--color-primary)">${sub.title}</strong>${UI.bilingual(sub.cn, sub.en)}</div>`;
        }
      }
      html += `</div>`;
    }

    // Extra paragraph sections
    if (cd.paragraphs) {
      for (const p of cd.paragraphs) {
        html += `<div class="card">${UI.bilingual(p.cn, p.en)}</div>`;
      }
    }

    this.render(html);
  },

  // ==================== 部件详情 ====================
  renderComponentDetail(params) {
    const md = this.getMachineData();
    if (!md || !md.components || !md.components.componentDetails) { Router.navigate('machine-home'); return; }

    const compId = params.id;
    const comp = md.components.componentDetails[compId];
    if (!comp) { this.render(`<div class="empty-state"><span class="empty-icon">🔍</span>未找到该部件信息</div>`); return; }

    const mi = this.getMachineInfo();
    this.setTitle(comp.title || compId);
    this.setBackRoute('components');

    let html = UI.breadcrumb([
      { label: '首页', route: 'home' },
      { label: mi.title, route: 'machine-home' },
      { label: '设备描述', route: 'components' },
      { label: comp.title || compId }
    ]);

    if (comp.description) html += `<div class="card">${UI.bilingual(comp.description.cn, comp.description.en)}</div>`;
    if (comp.image) html += UI.figure(comp.image, comp.imageCaption);

    if (comp.parts) {
      var partsRows = comp.parts.map(function(p) {
        var enHtml = p.en ? '<br><span style="font-size:0.7rem;color:var(--color-text-secondary)">' + p.en + '</span>' : '';
        return '<tr><td>' + p.id + '</td><td>' + p.name + enHtml + '</td></tr>';
      }).join('');
      html += '<div class="card"><div class="card-title">部件组成</div>';
      html += '<div class="table-wrapper"><table><thead><tr><th>项目</th><th>组件</th></tr></thead><tbody>' + partsRows + '</tbody></table></div></div>';
    }

    if (comp.subsections) {
      for (const sub of comp.subsections) {
        html += `<div class="card"><div class="card-title">${sub.title}</div>`;
        if (sub.cn) html += UI.bilingual(sub.cn, sub.en);
        if (sub.image) html += UI.figure(sub.image, sub.imageCaption);
        html += `</div>`;
      }
    }

    if (comp.function) html += `<div class="card">${UI.bilingual(comp.function.cn, comp.function.en)}</div>`;
    if (comp.design) html += `<div class="card">${UI.bilingual(comp.design.cn, comp.design.en)}</div>`;

    this.render(html);
  },

  // ==================== 维护首页 ====================
  renderMaintenance() {
    const mi = this.getMachineInfo();
    const md = this.getMachineData();
    if (!md || !md.maintenance) { Router.navigate('machine-home'); return; }

    this.setTitle('维护');
    this.setBackRoute('machine-home');
    this.updateBottomNav('maintenance');

    const mt = md.maintenance;
    let html = UI.breadcrumb([
      { label: '首页', route: 'home' },
      { label: mi.title, route: 'machine-home' },
      { label: '维护' }
    ]);

    if (mt.topics) {
      for (const [id, topic] of Object.entries(mt.topics)) {
        html += UI.subCard(topic.icon || '📋', topic.title, topic.subtitle, `maintenance-detail?id=${id}`);
      }
    }
    if (mt.procedures) {
      for (const [id, proc] of Object.entries(mt.procedures)) {
        html += UI.subCard(proc.icon || '🔧', proc.title, proc.subtitle, `maintenance-detail?id=${id}`);
      }
    }

    this.render(html);
  },

  // ==================== 维护详情页 ====================
  renderMaintenanceDetail(params) {
    const md = this.getMachineData();
    if (!md || !md.maintenance) { Router.navigate('machine-home'); return; }

    const topicId = params.id;
    const mt = md.maintenance;
    let topic = mt.topics ? mt.topics[topicId] : null;
    if (!topic && mt.procedures) topic = mt.procedures[topicId];

    if (!topic) { this.render(`<div class="empty-state"><span class="empty-icon">🔍</span>未找到该内容</div>`); return; }

    const mi = this.getMachineInfo();
    this.setTitle(topic.title || topicId);
    this.setBackRoute('maintenance');

    let html = UI.breadcrumb([
      { label: '首页', route: 'home' },
      { label: mi.title, route: 'machine-home' },
      { label: '维护', route: 'maintenance' },
      { label: topic.title || topicId }
    ]);

    if (topic.alerts) { for (const a of topic.alerts) html += UI.alert(a.type, a.title, a.content); }
    if (topic.notes) html += UI.noticeList(topic.notes);
    if (topic.prerequisites) {
      html += '<div class="card"><div class="card-title">📋 前提条件</div><ul style="padding-left:18px;font-size:0.85rem">';
      for (const p of topic.prerequisites) html += `<li style="margin:4px 0">${p.cn || p} ${p.en ? '<span style="color:var(--color-text-secondary);font-size:0.75rem">'+p.en+'</span>' : ''}</li>`;
      html += '</ul></div>';
    }
    if (topic.tools) html += `<div class="card"><div class="card-title">🔧 准备工具</div><p style="font-size:0.85rem">${topic.tools.join(' · ')}</p></div>`;
    if (topic.rows) html += UI.dataTableCard(topic.dataTitle || '', topic.rows);
    if (topic.content) html += `<div class="card">${UI.bilingual(topic.content.cn, topic.content.en)}</div>`;
    if (topic.paragraphs) { for (const p of topic.paragraphs) html += `<div class="card">${UI.bilingual(p.cn, p.en)}</div>`; }
    if (topic.steps) html += UI.stepFlow(topic.steps);

    // Sections
    if (topic.sections) {
      for (const section of topic.sections) {
        html += '<div class="section-group">';
        html += `<h3 style="font-size:0.9rem;font-weight:700;color:var(--color-primary-dark);margin:12px 0 8px">${section.title}</h3>`;
        if (section.alerts) { for (const a of section.alerts) html += UI.alert(a.type, a.title, a.content); }
        if (section.paragraphs) { for (const p of section.paragraphs) html += `<div style="margin-bottom:8px;font-size:0.85rem;color:var(--color-text-secondary)">${p.cn || p}</div>`; }
        if (section.steps) html += UI.stepFlow(section.steps);
        if (section.image) html += UI.figure(section.image, section.imageCaption);
        if (section.tips) { for (const t of section.tips) html += UI.alert(t.type||'info', t.title||'', t.content||t.cn||t); }
        if (section.table) html += UI.table(section.table.headers, section.table.rows);
        html += '</div>';
      }
    }

    if (topic.images) { for (const img of topic.images) html += UI.figure(img.src, img.caption); }
    if (topic.image) html += UI.figure(topic.image, topic.imageCaption);
    if (topic.children) { for (const child of topic.children) html += UI.subCard(child.icon||'', child.title, child.subtitle||'', child.route); }
    if (topic.table) html += UI.table(topic.table.headers, topic.table.rows);
    if (topic.footerNote) html += UI.alert('info', '', topic.footerNote);

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
    if (!query.trim()) { this.$searchResults.innerHTML = '<p class="search-hint">输入关键词开始搜索</p>'; return; }
    const results = Search.search(query);
    if (results.length === 0) {
      this.$searchResults.innerHTML = `<div class="empty-state"><span class="empty-icon">🔍</span><p>未找到"${query}"相关内容</p><p style="font-size:0.75rem;margin-top:4px">请尝试其他关键词</p></div>`;
      return;
    }
    this.$searchResults.innerHTML = `<p style="font-size:0.75rem;color:var(--color-text-light);margin-bottom:8px">找到 ${results.length} 条结果</p>` +
      results.map(r => `<div class="search-result-item" data-route="${r.route}"><div class="search-result-title">${r.title}</div><div class="search-result-preview">${r.preview}</div><div class="search-result-section">📂 ${r.section}</div></div>`).join('');
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
  render(html) { this.$mainContent.innerHTML = html; this.$mainContent.scrollTop = 0; },
  setTitle(title) { this.$headerTitle.textContent = title; document.title = title + ' - TM EOM'; },
  setBackRoute(route) { this.$btnBack.style.visibility = route ? 'visible' : 'hidden'; },
  updateBottomNav(activeRoute) {
    this.$bottomNav.querySelectorAll('.nav-item').forEach(b => b.classList.toggle('active', b.dataset.route === activeRoute));
  },

  // ==================== Service Worker ====================
  registerServiceWorker() {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('sw.js').catch(() => {});
    }
  }
};

document.addEventListener('DOMContentLoaded', () => {
  if (window.APP_DATA) Search.init();
  App.init();
});
