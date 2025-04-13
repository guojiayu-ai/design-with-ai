# Design with AI - 人工智能辅助设计课程网站

这是一个展示"Design with AI"课程信息的响应式网站，该课程专注于AI辅助设计领域。网站使用React和现代前端技术构建，为学生提供课程概述、教学大纲、教师团队介绍等信息。

## 🌟 功能特点

- 响应式设计，适配各种设备屏幕
- 交互式课程导航
- 浮动式动画元素
- 课程大纲和教学内容展示
- 教师团队介绍
- 常见问题解答(FAQ)
- 移动端兼容性优化

## 🚀 快速开始

确保您的系统已安装Node.js和npm。

### 安装依赖

```bash
npm install
```

### 本地开发

```bash
npm start
```

启动开发服务器后，打开 [http://localhost:3000](http://localhost:3000) 在浏览器中查看网站。
修改代码后，页面将自动刷新。

### 构建生产版本

```bash
npm run build
```

生成的构建文件将保存在`build`目录中，已优化用于生产环境。

### 部署到GitHub Pages

```bash
npm run deploy
```

该命令会构建项目并将构建结果部署到GitHub Pages上。它会自动将`build`目录的内容推送到`page_build`分支。

**注意**：当前配置使用了`--add`参数，这可能会将不必要的文件也推送到部署分支。如果只想推送构建结果，可以修改`package.json`中的部署脚本：

```json
"deploy": "gh-pages -d build -b page_build"
```

这样只会推送`build`目录的内容到`page_build`分支。

### GitHub Pages路由解决方案

本项目使用`HashRouter`而非`BrowserRouter`来解决GitHub Pages上的路由问题。这样可以确保直接访问URL（如`https://datawhalechina.github.io/design-with-ai/#/course/design-2d-spring-2025`）不会出现重定向循环。

如果遇到路由问题，请访问主页`https://datawhalechina.github.io/design-with-ai`，系统会自动重定向到正确的路由。

**对于开发者**：如需在本地开发环境使用`BrowserRouter`，可以在开发分支中更改Router类型，但部署到GitHub Pages前请切换回`HashRouter`。

## 📁 项目结构

```
src/
  ├── assets/        # 图像和静态资源
  ├── components/    # React组件
  │   ├── Banner.js          # 网站顶部横幅
  │   ├── CoursePage.js      # 课程页面主组件
  │   ├── CourseOverview.js  # 课程概述组件
  │   ├── Hero.js            # 主视觉区域(带动画效果)
  │   ├── InstructorTeam.js  # 教师团队介绍
  │   ├── Syllabus.js        # 课程大纲
  │   ├── FAQ.js             # 常见问题
  │   └── Footer.js          # 页脚组件
  ├── layouts/       # 布局组件
  ├── App.js         # 应用主组件
  ├── App.css        # 全局样式
  └── index.js       # 应用入口点
```

## 🔧 技术栈

- React 19
- React Router v7
- CSS3 (包含动画效果)
- TypeScript
- Tailwind CSS

## 📝 自定义与扩展

### 添加新课程

在`App.js`文件中添加新的路由，例如:

```javascript
<Route path="/course/new-course-id" element={<CoursePage />} />
```

### 修改课程内容

编辑`src/components/`目录下相应的组件文件来更新课程内容。

## 📱 移动端适配

本网站已针对移动端进行了特别优化：

- 响应式UI布局，自动适应不同屏幕尺寸
- 触摸事件优化，支持在移动设备上平滑交互
- 解决了iOS和Android上的常见显示问题
- 针对移动端的性能优化，减少不必要的重绘和刷新

### 已知问题

如果在手机浏览器访问时遇到页面不断刷新的问题，请尝试以下解决方案：
- 关闭浏览器的下拉刷新功能
- 尝试使用不同的浏览器（如Chrome或Safari）
- 确保使用最新版本的应用
