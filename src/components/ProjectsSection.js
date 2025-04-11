import React from 'react';

const ProjectCard = ({ children }) => {
  return (
    <div className="project-card">
      {children}
    </div>
  );
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="section overview">
      <h2 className="section-title">学生项目展示</h2>
      
      <p className="text-center">
        以下是往期学生的优秀项目作品。通过本课程，您将有机会创建自己的AI驱动设计项目，并有可能在年度展览中展出。
      </p>
      
      <div className="projects-grid">
        <ProjectCard>项目展示 1</ProjectCard>
        <ProjectCard>项目展示 2</ProjectCard>
        <ProjectCard>项目展示 3</ProjectCard>
      </div>
    </section>
  );
};

export default ProjectsSection; 