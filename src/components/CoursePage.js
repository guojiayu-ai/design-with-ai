import React from 'react';
import { useParams } from 'react-router-dom'; // 用于获取 URL 参数

// 导入所有需要的版块组件
import Hero from './Hero';
import CourseOverview from './CourseOverview';
// import CourseFeatures from './CourseFeatures'; // <--- 移除导入
import InstructorTeam from './InstructorTeam';
import Syllabus from './Syllabus'; // 或者 CourseMaterials
// import ProjectsSection from './ProjectsSection'; // <--- 移除导入
// import ApplySection from './ApplySection'; // 已移除
import FAQ from './FAQ'; // 新增导入 FAQ 组件

// 假设有一个地方定义了课程数据
// const courseData = {
//   'design-2d-spring-2025': { title: 'Design with AI 2D - Spring 2025', ... },
//   'design-3d-summer-2025': { title: 'Design with AI 3D - Summer 2025', ... },
// };

const CoursePage = () => {
  const { courseId } = useParams(); // 获取 URL 中的 courseId, e.g., "design-2d-spring-2025"

  // --- 数据加载逻辑 (后续实现) ---
  // 在这里，你可以根据 courseId 从 courseData (或其他来源) 获取特定课程的数据
  // const currentCourse = courseData[courseId];
  // if (!currentCourse) {
  //   // 处理课程不存在的情况，例如显示 404
  //   return <div>课程未找到</div>;
  // }
  // 然后将 currentCourse 的数据传递给下面的组件作为 props
  // 例如: <Hero title={currentCourse.title} subtitle={currentCourse.subtitle} />
  // --- 数据加载逻辑结束 ---

  // 目前，我们先直接渲染所有组件
  // 注意：这些组件内部可能需要修改，以接收和显示动态数据 (props)

  console.log("当前课程 ID:", courseId); // 在控制台打印当前课程ID，方便调试

  return (
    <>
      <Hero />
      <CourseOverview />
      {/* <CourseFeatures /> */} {/* <--- 移除使用 */}
      <InstructorTeam />
      <Syllabus /> {/* 或 CourseMaterials */}
      <FAQ /> {/* 新增 FAQ 组件 */}
      {/* <ProjectsSection /> */} {/* <--- 移除使用 */}
      {/* <ApplySection /> */} {/* 已移除 */}
    </>
  );
};

export default CoursePage; 