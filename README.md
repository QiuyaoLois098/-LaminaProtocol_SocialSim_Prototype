# Lamina Protocol - AI Governance Simulation

一个关于AI治理的互动式网页游戏，让玩家体验AI发展过程中的关键决策。

## 🎮 游戏特色

- **5个不同角色**：科学家、政策官员、产业代表、文化代表、公民代表
- **3轮决策系统**：每轮4个选项，影响不同的价值变量
- **12种不同结局**：基于玩家决策的AI未来场景
- **悬停质疑提示**：每个选项都有深思熟虑的"Are you sure? If..."提示
- **实时变量计算**：决策影响可视化展示
- **响应式设计**：支持桌面和移动设备

## 🚀 快速开始

### 安装依赖
```bash
npm install
```

### 开发模式
```bash
npm run dev
```
然后访问 http://localhost:5173/

### 构建生产版本
```bash
npm run build
```

## 📁 项目结构

```
src/
├── App.jsx              # 主应用组件
├── App.css              # 样式文件
├── gameData.js          # 游戏数据（角色、轮次、决策选项）
├── doubtPrompts.js      # 悬停质疑提示内容
├── endingCalculation.js # 结局计算逻辑
└── socketManager.js     # 网络连接管理
```

## 🔧 自定义修改

### 修改决策选项
编辑 `src/gameData.js` 中的 `DECISIONS` 对象

### 修改质疑提示
编辑 `src/doubtPrompts.js` 中的 `DECISIONS_WITH_DOUBTS` 对象

### 修改结局
编辑 `src/endingCalculation.js` 中的结局判断逻辑

### 修改开场文本
编辑 `src/App.jsx` 中的 narrative 数组

## 🎯 游戏变量

游戏追踪5个核心变量：
- **Intervention** (干预)：AI主动性程度
- **Control** (控制)：人类控制程度
- **Compliance** (合规)：遵循规则程度
- **Ethics** (伦理)：道德考量程度
- **Resource** (资源)：资源分配效率

## 🌟 技术栈

- **React** - 前端框架
- **Vite** - 构建工具
- **CSS3** - 样式设计
- **JavaScript ES6+** - 核心逻辑

## 📄 许可证

MIT License

## 🤝 贡献

欢迎提交 Issues 和 Pull Requests！

---

由 Manus AI 创建和增强

