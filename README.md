# Design with AI - 人工智能辅助设计课程网站

这是一个展示"Design with AI"课程信息的响应式网站，该课程专注于AI辅助设计领域。网站使用React和现代前端技术构建，为学生提供课程概述、教学大纲、教师团队介绍等信息。

## 🌟 功能特点

- 响应式设计，适配各种设备屏幕
- 交互式课程导航
- 浮动式动画元素
- 课程大纲和教学内容展示
- 教师团队介绍
- 常见问题解答(FAQ)

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

该命令会构建项目并将其部署到GitHub Pages上。

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
