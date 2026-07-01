/**
 * TM PrimePress Single EOM - 路由管理
 * 基于 URL Hash 的简易 SPA 路由
 */

const Router = {
  currentRoute: null,
  currentParams: null,
  listeners: [],

  /**
   * 注册路由监听器
   * @param {string} route - 路由名称
   * @param {function} handler - 处理函数(params, route)
   */
  on(route, handler) {
    this.listeners.push({ route, handler });
  },

  /**
   * 导航到指定路由
   * @param {string} route - 目标路由
   * @param {object} params - 路由参数
   */
  navigate(route, params = {}) {
    const paramStr = Object.keys(params).length > 0
      ? '?' + new URLSearchParams(params).toString()
      : '';
    window.location.hash = `#${route}${paramStr}`;
  },

  /**
   * 返回上一页
   */
  back() {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      this.navigate('home');
    }
  },

  /**
   * 获取当前路由信息
   */
  getCurrent() {
    return { route: this.currentRoute, params: this.currentParams };
  },

  /**
   * 解析当前 hash
   */
  _parseHash() {
    const hash = window.location.hash.slice(1) || 'home';
    const [route, queryStr] = hash.split('?');
    const params = {};
    if (queryStr) {
      new URLSearchParams(queryStr).forEach((v, k) => { params[k] = v; });
    }
    return { route, params };
  },

  /**
   * 处理路由变化
   */
  _handleChange() {
    const { route, params } = this._parseHash();
    this.currentRoute = route;
    this.currentParams = params;

    // 匹配最具体的监听器
    let bestMatch = null;
    let bestScore = -1;

    for (const listener of this.listeners) {
      // 完全匹配
      if (listener.route === route) {
        bestMatch = listener;
        bestScore = 2;
        break;
      }
      // 前缀匹配（用于子路由，如 maintenance/*）
      if (listener.route.endsWith('/*') && route.startsWith(listener.route.replace('/*', ''))) {
        const score = listener.route.length;
        if (score > bestScore) {
          bestMatch = listener;
          bestScore = score;
        }
      }
    }

    if (bestMatch) {
      bestMatch.handler(params, route);
    } else {
      // 默认回退到首页
      console.warn(`No handler for route: ${route}`);
      this.navigate('home');
    }
  },

  /**
   * 启动路由监听
   */
  init() {
    window.addEventListener('hashchange', () => this._handleChange());
    // 初始加载
    this._handleChange();
  }
};
