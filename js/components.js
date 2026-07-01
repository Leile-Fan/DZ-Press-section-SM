/**
 * TM PrimePress Single EOM - UI 组件库
 * 可复用的渲染组件
 */

const UI = {

  /**
   * 渲染页面容器（带标题和可选图片）
   */
  pageContainer(title, content, backRoute) {
    App.setTitle(title);
    App.setBackRoute(backRoute);
    return content;
  },

  /**
   * 章节标题组
   */
  sectionHeader(number, title) {
    return `
      <div class="section-header">
        <span class="section-num">${number}</span>
        <span>${title}</span>
      </div>
    `;
  },

  /**
   * 分类卡片（首页用）
   */
  categoryCard(icon, title, subtitle, route) {
    return `
      <div class="category-card" data-route="${route}">
        <div class="cat-icon">${icon}</div>
        <div class="cat-info">
          <h3>${title}</h3>
          <p>${subtitle}</p>
        </div>
        <span class="cat-arrow">›</span>
      </div>
    `;
  },

  /**
   * 子项可点击卡片
   */
  subCard(icon, title, subtitle, route) {
    const iconHtml = icon ? `<span class="card-icon">${icon}</span>` : '';
    return `
      <div class="card card-clickable" data-route="${route}">
        ${iconHtml}
        <div class="card-body">
          <h3>${title}</h3>
          ${subtitle ? `<p>${subtitle}</p>` : ''}
        </div>
        <span class="card-arrow">›</span>
      </div>
    `;
  },

  /**
   * 数据行
   */
  dataRow(label, value, sub) {
    return `
      <div class="data-row">
        <span class="data-label">${label}</span>
        <div style="text-align:right">
          <div class="data-value">${value || '-'}</div>
          ${sub ? `<div class="data-sub">${sub}</div>` : ''}
        </div>
      </div>
    `;
  },

  /**
   * 数据表格卡片
   */
  dataTableCard(title, rows) {
    const rowsHtml = rows.map(r => this.dataRow(r.label, r.value, r.sub)).join('');
    return `
      <div class="card section-group">
        ${title ? `<div class="card-title">${title}</div>` : ''}
        ${rowsHtml}
      </div>
    `;
  },

  /**
   * 步骤卡片
   */
  stepCard(label, contentCn, contentEn) {
    return `
      <div class="step-card">
        <div class="step-label">${label}</div>
        <div class="step-content">
          ${contentCn}
          ${contentEn ? `<div class="step-en">${contentEn}</div>` : ''}
        </div>
      </div>
    `;
  },

  /**
   * 步骤流程
   */
  stepFlow(steps) {
    const stepsHtml = steps.map(s => this.stepCard(s.label, s.cn, s.en)).join('');
    return `<div class="step-flow">${stepsHtml}</div>`;
  },

  /**
   * 警告框
   */
  alert(type, title, content) {
    const icons = { warning: '⚠️', danger: '🔴', info: 'ℹ️' };
    return `
      <div class="alert alert-${type}">
        <span class="alert-title">${icons[type] || ''} ${title}</span>
        ${content}
      </div>
    `;
  },

  /**
   * 中英双语文段
   */
  bilingual(cnText, enText) {
    return `
      <div class="bilingual">
        <div class="cn-text">${cnText}</div>
        ${enText ? `<div class="en-text">${enText}</div>` : ''}
      </div>
    `;
  },

  /**
   * 图片
   */
  figure(src, caption) {
    return `
      <figure class="image-figure">
        <img src="${src}" alt="${caption || ''}" loading="lazy" onclick="App.openImage('${src}', '${caption || ''}')">
        ${caption ? `<figcaption>${caption}</figcaption>` : ''}
      </figure>
    `;
  },

  /**
   * 数据表格（响应式）
   */
  table(headers, rows) {
    const thead = `<thead><tr>${headers.map(h => `<th>${h}</th>`).join('')}</tr></thead>`;
    const tbody = `<tbody>${rows.map(row =>
      `<tr>${row.map(cell => `<td>${cell}</td>`).join('')}</tr>`
    ).join('')}</tbody>`;
    return `
      <div class="table-wrapper">
        <table>${thead}${tbody}</table>
      </div>
    `;
  },

  /**
   * 面包屑
   */
  breadcrumb(items) {
    return `
      <div class="breadcrumb">
        ${items.map((item, i) => {
          const sep = i < items.length - 1 ? ' › ' : '';
          if (item.route) {
            return `<span data-route="${item.route}">${item.label}</span>${sep}`;
          }
          return `<span>${item.label}</span>${sep}`;
        }).join('')}
      </div>
    `;
  },

  /**
   * 注意事项列表
   */
  noticeList(items) {
    return `
      <ul style="list-style:none;padding:0">
        ${items.map(item => `
          <li style="padding:6px 0;font-size:0.85rem;border-bottom:1px solid var(--color-divider)">
            <span style="color:var(--color-${item.type || 'text-secondary'});margin-right:6px">
              ${item.type === 'danger' ? '🔴' : item.type === 'warning' ? '⚠️' : 'ℹ️'}
            </span>
            ${item.cn}
            ${item.en ? `<div style="font-size:0.75rem;color:var(--color-text-secondary);margin-top:2px">${item.en}</div>` : ''}
          </li>
        `).join('')}
      </ul>
    `;
  }
};
