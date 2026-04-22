# 器灵博客 - EmDash 中文主题

一个简洁优雅的中文博客主题，基于 EmDash CMS 构建。

## ✨ 特点

- 🇨🇳 **完全中文化** - 后台和前端界面均为中文
- 🎨 **简洁设计** - 专注阅读体验
- 📱 **响应式布局** - 完美适配移动端
- 🔍 **搜索功能** - 内置文章搜索
- 📑 **目录支持** - 自动生成文章目录
- 🏷️ **分类标签** - 支持文章分类和标签
- ⚡ **性能优异** - 基于 Astro + Cloudflare

## 📦 目录结构

```
emdash-chinese-theme/
├── .emdash/
│   └── seed.json          # 内容模型和示例数据
├── src/
│   ├── components/        # 组件
│   │   ├── Header.astro   # 头部导航
│   │   ├── Footer.astro   # 页脚
│   │   ├── Sidebar.astro  # 侧边栏
│   │   └── Toc.astro      # 目录组件
│   ├── layouts/           # 布局
│   │   ├── Base.astro     # 基础布局
│   │   └── Post.astro     # 文章布局
│   ├── pages/             # 页面
│   │   ├── index.astro    # 首页
│   │   ├── posts/         # 文章页
│   │   ├── categories/    # 分类页
│   │   ├── tags/          # 标签页
│   │   ├── search.astro   # 搜索页
│   │   └── 404.astro      # 404页
│   └── live.config.ts     # Live Collections 配置
├── astro.config.mjs       # Astro 配置
├── tailwind.config.mjs    # Tailwind 配置
└── package.json
```

## 🚀 快速开始

### 1. 创建项目

```bash
npm create astro@latest -- --template ./emdash-chinese-theme
```

或从 GitHub:

```bash
npm create astro@latest -- --template github:your-username/emdash-chinese-theme
```

### 2. 安装依赖

```bash
cd your-blog
npm install
```

### 3. 启动开发服务器

```bash
npm run dev
```

### 4. 完成设置向导

访问 `http://localhost:4321/_emdash/admin` 完成 EmDash 设置向导。

## 📝 使用说明

### 管理后台

后台地址：`/_emdash/admin`

首次访问需要创建管理员账户。

### 文章管理

- **文章** (`/posts`) - 博客文章
- **页面** (`/pages`) - 独立页面（如关于页面）

### 分类和标签

- **分类** - 文章的主要分类
- **标签** - 文章的具体标签

### 导航菜单

在 `seed.json` 中配置导航菜单：

```json
{
  "menus": [
    {
      "name": "primary",
      "label": "主导航",
      "items": [
        { "type": "custom", "label": "首页", "url": "/" },
        { "type": "custom", "label": "文章", "url": "/posts" },
        { "type": "custom", "label": "关于", "url": "/about" }
      ]
    }
  ]
}
```

## 🎨 自定义

### 修改站点信息

编辑 `.emdash/seed.json`：

```json
{
  "settings": {
    "title": "你的博客名称",
    "tagline": "你的博客标语",
    "description": "博客描述"
  }
}
```

### 修改样式

主题使用 Tailwind CSS，样式定义在各组件的 `<style>` 标签中。

主要样式变量在 `src/layouts/Base.astro` 中定义。

## ☁️ 部署到 Cloudflare

### 1. 创建 Cloudflare 资源

需要在 Cloudflare 创建以下资源：

- D1 数据库
- R2 存储桶
- KV 命名空间（可选）

### 2. 配置 wrangler

创建 `wrangler.toml`：

```toml
name = "your-blog"
main = "./dist/_worker.js"
compatibility_date = "2024-01-01"

[[d1_databases]]
binding = "DB"
database_name = "your-database"
database_id = "your-database-id"

[[r2_buckets]]
binding = "BUCKET"
bucket_name = "your-bucket"
```

### 3. 部署

```bash
npm run build
npx wrangler deploy
```

## 📄 许可证

MIT License

## 🙏 致谢

- [EmDash](https://emdashcms.com) - 现代化 CMS
- [Astro](https://astro.build) - 静态站点生成器
- [Tailwind CSS](https://tailwindcss.com) - CSS 框架
