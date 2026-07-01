/**
 * TM PrimePress Single EOM - 搜索功能
 */

const Search = {
  searchIndex: [],
  searchCache: new Map(),

  /**
   * 初始化搜索（构建索引）
   */
  init() {
    if (typeof APP_DATA === 'undefined') {
      console.warn('APP_DATA not loaded yet, search will init later');
      return;
    }
    this.buildIndex();
  },

  /**
   * 构建搜索索引
   */
  buildIndex() {
    if (!window.APP_DATA || !window.APP_DATA.machines) return;
    this.searchIndex = [];

    function addToIndex(section, chapterTitle, machineId, machineName) {
      if (!section) return;
      if (section.title) {
        const titleText = typeof section.title === 'string' ? section.title : (section.title.cn || section.title || '');
        this.searchIndex.push({
          title: titleText,
          text: titleText,
          route: section.route || section.id || '',
          section: machineName || chapterTitle || ''
        });
      }
      if (section.rows) {
        for (const row of section.rows) {
          this.searchIndex.push({
            title: row.label || row.cn || '',
            text: `${row.label||''} ${row.value||''} ${row.cn||''} ${row.en||''} ${row.sub||''}`,
            route: section.route || section.id || '',
            section: machineName || chapterTitle || ''
          });
        }
      }
      if (section.steps) {
        for (const step of section.steps) {
          this.searchIndex.push({
            title: step.label || '',
            text: `${step.label||''} ${step.cn||''} ${step.en||''}`,
            route: section.route || section.id || '',
            section: machineName || chapterTitle || ''
          });
        }
      }
      if (section.content) {
        const text = typeof section.content === 'string' ? section.content : (section.content.cn || '');
        this.searchIndex.push({
          title: section.title || '',
          text: text,
          route: section.route || section.id || '',
          section: machineName || chapterTitle || ''
        });
      }
      if (section.paragraphs) {
        for (const p of section.paragraphs) {
          this.searchIndex.push({
            title: section.title || '',
            text: `${p.cn||''} ${p.en||''}`,
            route: section.route || section.id || '',
            section: machineName || chapterTitle || ''
          });
        }
      }
      // Recurse
      if (section.sections) {
        for (const sub of section.sections) {
          addToIndex.call(this, sub, section.title || chapterTitle, machineId, machineName);
        }
      }
      if (section.children) {
        for (const child of section.children) {
          addToIndex.call(this, child, section.title || chapterTitle, machineId, machineName);
        }
      }
      if (section.topics) {
        for (const [id, topic] of Object.entries(section.topics)) {
          const t = {...topic, route: `maintenance-detail?id=${id}`, id};
          addToIndex.call(this, t, section.title || chapterTitle, machineId, machineName);
        }
      }
      if (section.procedures) {
        for (const [id, proc] of Object.entries(section.procedures)) {
          const p = {...proc, route: `maintenance-detail?id=${id}`, id};
          addToIndex.call(this, p, section.title || chapterTitle, machineId, machineName);
        }
      }
      if (section.componentDetails) {
        for (const [id, comp] of Object.entries(section.componentDetails)) {
          const c = {...comp, route: `component-detail?id=${id}`, id};
          addToIndex.call(this, c, section.title || chapterTitle, machineId, machineName);
        }
      }
      ['application', 'overview', 'techDescription', 'suctionRollFunction'].forEach(key => {
        if (section[key] && typeof section[key] === 'object') {
          addToIndex.call(this, {...section[key], route: section.route || ''}, section.title || chapterTitle, machineId, machineName);
        }
      });
    }

    // Iterate all machines
    for (const [machineId, machine] of Object.entries(window.APP_DATA.machines)) {
      const md = machine.data;
      if (!md) continue;
      if (md.sections) {
        for (const s of md.sections) {
          this.searchIndex.push({title: s.title, text: s.title + ' ' + (s.subtitle||''), route: s.route, section: machine.title});
        }
      }
      if (md.technicalData) addToIndex.call(this, md.technicalData, '', machineId, machine.title);
      if (md.components) addToIndex.call(this, md.components, '', machineId, machine.title);
      if (md.maintenance) addToIndex.call(this, md.maintenance, '', machineId, machine.title);
    }
  },

  /**
   * 执行搜索
   * @param {string} query - 搜索关键词
   * @returns {array} 搜索结果
   */
  search(query) {
    if (!query || query.trim().length === 0) return [];
    const q = query.toLowerCase().trim();

    if (this.searchCache.has(q)) {
      return this.searchCache.get(q);
    }

    const results = [];
    const seen = new Set();

    for (const item of this.searchIndex) {
      const text = item.text.toLowerCase();
      if (text.includes(q)) {
        const key = `${item.route}|${item.title}`;
        if (seen.has(key)) continue;
        seen.add(key);

        // 生成预览文字，高亮匹配部分
        const preview = this._generatePreview(item.text, q);
        results.push({
          title: item.title,
          preview: preview,
          route: item.route,
          section: item.section
        });

        // 最多 50 条结果
        if (results.length >= 50) break;
      }
    }

    this.searchCache.set(q, results);
    return results;
  },

  /**
   * 生成搜索结果预览
   */
  _generatePreview(text, query) {
    const lower = text.toLowerCase();
    const idx = lower.indexOf(query);
    if (idx < 0) return text.slice(0, 100);

    const start = Math.max(0, idx - 30);
    const end = Math.min(text.length, idx + query.length + 50);
    let preview = text.slice(start, end);

    if (start > 0) preview = '...' + preview;
    if (end < text.length) preview = preview + '...';

    // 高亮匹配词（不区分大小写）
    const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
    preview = preview.replace(regex, '<mark>$1</mark>');

    return preview;
  },

  /**
   * 清除搜索缓存
   */
  clearCache() {
    this.searchCache.clear();
  }
};
