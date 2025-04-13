import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import logoImage from '../assets/diidLOGO.png'; // 导入diid logo图片
import dwLogoImage from '../assets/dwLOGO.png'; // 导入dw logo图片
import githubIcon from '../assets/github-mark.svg'; // 导入GitHub图标

// 定义课程选项
const courses = [
  { id: 'design-2d-spring-2025', name: 'Design with AI 2D - Spring 2025' },
  { id: 'design-3d-summer-2025', name: 'Design with AI 3D - Summer 2025' },
];

const Banner = () => {
  const navigate = useNavigate();
  const { courseId } = useParams();
  
  // 当前课程ID，如果没有则使用默认值
  const currentCourseId = courseId || courses[0].id;

  const handleCourseChange = (event) => {
    const selectedCourseId = event.target.value;
    navigate(`/course/${selectedCourseId}`);
  };
  
  // 添加滚动到指定部分的函数
  const scrollToSection = (sectionId) => (event) => {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      // 获取导航栏高度
      const navHeight = 60; // 导航栏高度，根据CSS设置的60px
      const extraPadding = 20; // 额外的空间，使标题不会紧贴导航栏
      
      // 计算目标位置：元素的位置减去导航栏高度和额外空间
      const targetPosition = section.getBoundingClientRect().top + window.pageYOffset - navHeight - extraPadding;
      
      // 使用window.scrollTo进行平滑滚动
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="main-navigation">
      <div className="logo">
        <Link to={`/course/${currentCourseId}`} className="logo-text-link">
          <img src={dwLogoImage} alt="DW Logo" className="dw-logo-image" />
          <img src={logoImage} alt="DIID Logo" className="logo-image" />
          <span className="logo-text">DESIGN WITH AI</span>
        </Link>
      </div>
      <nav className="nav">
        <div className="course-selector-container">
          <select
            className="course-selector"
            value={currentCourseId}
            onChange={handleCourseChange}
          >
            {courses.map(course => (
              <option key={course.id} value={course.id}>
                {course.name}
              </option>
            ))}
          </select>
        </div>
        <a href="#overview" onClick={scrollToSection('overview')}>课程简介</a>
        <a href="#instructors" onClick={scrollToSection('instructors')}>教师团队</a>
        <a href="#syllabus" onClick={scrollToSection('syllabus')}>课程大纲</a>
        <a href="#faq" onClick={scrollToSection('faq')}>FAQ</a>
        <a 
          href="https://github.com/datawhalechina/design-with-ai" 
          className="github-link" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{
            display: 'flex',
            alignItems: 'center',
            background: '#333',
            color: 'white',
            padding: '5px 10px',
            borderRadius: '4px',
            marginLeft: '15px',
            fontWeight: 'bold',
            fontSize: '0.9rem'
          }}
        >
          <img 
            src={githubIcon} 
            alt="GitHub" 
            style={{ 
              width: '20px', 
              height: '20px', 
              marginRight: '5px',
              filter: 'brightness(0) invert(1)' // 使图标变白色
            }} 
          />
          GitHub
        </a>
      </nav>
    </div>
  );
};

export default Banner; 