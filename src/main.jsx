import { StrictMode } from 'react' // 使用react的严格模式：方便开发阶段发现问题
import { createRoot } from 'react-dom/client' // react18的新方法 用来渲染根节点
import './index.css' // 全局样式文件
import App from './App.jsx'  // 根组件

/**
 * 1. 找到网页中的 root 容器
 * 2. 告诉 React 这是渲染画布
 * 3. 绘制 <App> 组件到画布中
 * 4. 严格模式全程监控开发阶段的问题
 * 
public/index.html
└── <div id="root"></div>  ← 被 createRoot() 找到
    └── 渲染 <App> 组件
        └── App.jsx 中编写的内容
 */

// index.html 中 根节点 id="root"
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
