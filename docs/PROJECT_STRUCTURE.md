<!--
 * @Author: Diana Tang
 * @Date: 2025-05-21 16:56:16
 * @LastEditors: Diana Tang
 * @Description: some description
 * @FilePath: /vite-react-ts-tailwind-starter/PROJECT_STRUCTURE.md
-->
# 项目结构说明

这是一个基于 Vite + React + TypeScript + Tailwind CSS 的项目模板。以下是项目的主要目录结构及说明：

## 目录结构

```
.
├── LICENSE
├── PROJECT_STRUCTURE.md
├── README.md
├── commitlint.config.cjs
├── components.json
├── dist.zip
├── index.html
├── lint-staged.config.js
├── package.json
├── postcss.config.js
├── public
│   ├── favicon.ico
│   └── og-image.jpeg
├── src
│   ├── app.tsx
│   ├── assets
│   │   └── icons
│   ├── components
│   │   ├── error-page
│   │   ├── header
│   │   ├── hero
│   │   ├── language-selector
│   │   ├── layout
│   │   └── ui
│   ├── hooks
│   │   └── use-localstorage-state.ts
│   ├── i18n
│   │   ├── config.ts
│   │   └── locales
│   ├── lib
│   │   ├── constants.ts
│   │   ├── env.ts
│   │   └── utils.ts
│   ├── main.tsx
│   ├── pages
│   │   ├── about
│   │   └── home
│   ├── router.tsx
│   ├── styles
│   │   └── globals.less
│   ├── types
│   │   ├── i18next.d.ts
│   │   └── resources.ts
│   └── vite-env.d.ts
├── tailwind.config.js
├── transmart.config.ts
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
└── yarn.lock

21 directories, 30 files
```

## 主要技术栈

- Vite - 前端构建工具
- React - 用户界面库
- TypeScript - 类型安全的 JavaScript 超集
- Tailwind CSS - 原子化 CSS 框架
- i18next - 国际化解决方案

## 项目特点

- 📦 开箱即用的 TypeScript 支持
- 🎨 集成 Tailwind CSS 进行样式开发
- 🌍 内置国际化支持
- 📱 响应式设计
- 🔧 完整的开发工具链配置
- 🚀 优化的生产构建
