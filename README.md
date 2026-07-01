# TM PrimePress Single EOM

**安德里茨 PrimePress 压榨部操作与维护说明书 · iPhone 查询 App**

这是一个 PWA（Progressive Web App），可在 iPhone 上像原生 App 一样使用。支持离线浏览、全文搜索、中英双语对照。

---

## 🚀 如何使用

### 方法一：直接打开（本地）
1. 用浏览器打开 `index.html` 即可使用

### 方法二：部署到 iPhone（推荐）
1. 将整个 `press-app` 文件夹上传到 GitHub Pages 或其他静态托管服务
2. 在 iPhone Safari 中打开网址
3. 点击底部 **分享按钮** → **添加到主屏幕**
4. 主屏幕上会出现 "TM PrimePress Single EOM" 图标，点击即可像 App 一样使用

### 方法三：本地网络访问
1. 在电脑上运行：
   ```bash
   cd press-app
   python3 -m http.server 8080
   ```
2. 确保 iPhone 和电脑在同一 WiFi
3. iPhone Safari 打开 `http://<电脑IP>:8080`

---

## 📂 文件结构

```
press-app/
├── index.html          # 主页面
├── manifest.json       # PWA 配置
├── sw.js              # 离线缓存
├── favicon.ico        # 网站图标
├── css/
│   └── style.css      # 样式（淡蓝色主题）
├── js/
│   ├── data.js        # 📝 所有内容数据（编辑此文件添加内容）
│   ├── app.js         # 主逻辑
│   ├── router.js      # 路由
│   ├── components.js  # UI 组件
│   └── search.js      # 搜索
├── images/            # 图片资源
└── README.md
```

---

## 📝 如何添加新内容

1. 打开 `js/data.js` 文件
2. 按现有格式添加新条目，例如：

```javascript
// 在 technicalData.sections 中添加新参数：
{
  title: "📊 新参数组",
  type: "data-table",
  rows: [
    { label: "参数名 Parameter", value: "数值" },
    { label: "参数2 Parameter 2", value: "数值2" }
  ]
}

// 或在 maintenance.procedures 中添加新步骤：
"new-procedure": {
  title: "新操作步骤",
  steps: [
    { label: "步骤 a", cn: "中文说明", en: "English description" },
    { label: "步骤 b", cn: "中文说明", en: "English description" }
  ]
}
```

3. 保存文件，刷新浏览器即可看到新内容

### 添加新图片
1. 将图片放入 `images/` 目录
2. 在数据中引用：`"image": "images/你的图片.jpg"`

---

## 🎨 自定义颜色

编辑 `css/style.css` 开头的 CSS 变量：

```css
:root {
  --color-primary: #4A90D9;  /* 主色 */
  --color-bg: #F0F5FA;       /* 背景 */
  ...
}
```

---

## ⚠️ 注意事项

- 文档版权归 ANDRITZ AG 所有，仅供内部使用
- 如需部署到公网，请确保有相应的使用授权
- PDF 中的图片均为提取的原图，保留所有权利

---

## 📱 支持平台

- ✅ iPhone (Safari, iOS 15+)
- ✅ iPad
- ✅ Android (Chrome)
- ✅ 电脑浏览器 (Chrome, Edge, Safari)

---

*© 2026 ANDRITZ AG. 仅供内部参考使用。*
