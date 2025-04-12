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

  const handleCourseChange = (event) => {
    const selectedCourseId = event.target.value;
    navigate(`/course/${selectedCourseId}`);
  };

  return (
    <div className="main-navigation">
      <div className="logo">
        <Link to={`/course/${courseId || courses[0].id}`} className="logo-text-link">
          <img src={dwLogoImage} alt="DW Logo" className="dw-logo-image" />
          <img src={logoImage} alt="DIID Logo" className="logo-image" />
          <span className="logo-text">DESIGN WITH AI</span>
        </Link>
      </div>
      <nav className="nav">
        <div className="course-selector-container">
          <select
            className="course-selector"
            value={courseId || courses[0].id}
            onChange={handleCourseChange}
          >
            {courses.map(course => (
              <option key={course.id} value={course.id}>
                {course.name}
              </option>
            ))}
          </select>
        </div>
        <a href="#overview">课程简介</a>
        <a href="#instructors">教师团队</a>
        <a href="#syllabus">课程大纲</a>
        <a href="#faq">FAQ</a>
        <a 
          href="https://github.com/datawhalechina/design-with-AI" 
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