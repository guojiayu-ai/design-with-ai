import React, { useState } from 'react';

const FileLink = ({ type, text, url = "#" }) => {
  const getIcon = () => {
    switch (type) {
      case 'pdf':
        return <span className="file-icon pdf-icon">📄</span>;
      case 'ppt':
        return <span className="file-icon ppt-icon">📊</span>;
      case 'video':
        return <span className="file-icon video-icon">🎬</span>;
      case 'link':
        return <span className="file-icon link-icon">🔗</span>;
      default:
        return <span className="file-icon">📄</span>;
    }
  };

  return (
    <a href={url} className="course-material-link">
      {getIcon()} {text}
    </a>
  );
};

const Syllabus = () => {
  // 状态管理：记录哪些行是展开的
  const [expandedRows, setExpandedRows] = useState({});
  const [expandAll, setExpandAll] = useState(false);
  
  // 切换行的展开/折叠状态
  const toggleRow = (index) => {
    setExpandedRows(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };
  
  // 切换所有行的展开/折叠状态
  const toggleAllRows = () => {
    const newExpandAll = !expandAll;
    setExpandAll(newExpandAll);
    
    // 根据当前展开全部的状态，设置所有行的展开状态
    const newExpandedRows = {};
    courseMaterials.forEach((_, index) => {
      newExpandedRows[index] = newExpandAll;
    });
    
    setExpandedRows(newExpandedRows);
  };
  
  // 课程材料数据
  const courseMaterials = [
    {
      date: "2/23",
      topic: "AI与设计导论",
      slidesPDF: [
        { text: "AI设计课程介绍", url: "#" },
        { text: "生成式AI基础", url: "#" }
      ],
      slidesPPT: [
        { text: "AI设计课程介绍", url: "#" },
        { text: "生成式AI基础", url: "#" }
      ],
      videos: [
        { text: "课程规则与学习路径", url: "#" },
        { text: "第0讲：设计师的AI时代", url: "#" },
        { text: "第1讲：生成式AI与设计创新", url: "#" }
      ],
      extraMaterials: [
        { text: "设计师必知的AI基础知识", url: "#" },
        { type: "pdf", text: "AI设计工具全景图", url: "#" }
      ],
      detailedContent: "本次课程将介绍AI与设计的交叉领域，探讨生成式AI如何改变设计流程和思维方式。学生将了解课程结构、评分标准和项目要求，以及AI设计工具的基本操作与应用场景。"
    },
    {
      date: "3/1",
      topic: "AI图像生成与设计应用",
      slidesPDF: [
        { text: "图像生成模型原理", url: "#" },
        { text: "设计提示词工程", url: "#" }
      ],
      slidesPPT: [
        { text: "图像生成模型原理", url: "#" },
        { text: "设计提示词工程", url: "#" }
      ],
      videos: [
        { text: "第2讲：Midjourney与Stable Diffusion实战", url: "#" },
        { text: "第3讲：设计师的提示词策略", url: "#" }
      ],
      extraMaterials: [
        { type: "link", text: "视觉设计提示词指南", url: "#" }
      ],
      detailedContent: "学习AI图像生成技术的核心原理和应用方法，掌握Midjourney、DALL-E和Stable Diffusion等工具的使用技巧。探索如何通过精确的提示词引导AI创造符合设计需求的视觉内容，以及如何将AI生成的素材整合到设计工作流中。"
    },
    {
      date: "3/8",
      topic: "UI/UX设计中的AI应用",
      slidesPDF: [
        { text: "AI驱动的界面设计", url: "#" }
      ],
      slidesPPT: [
        { text: "AI驱动的界面设计", url: "#" }
      ],
      videos: [
        { text: "第4讲：AI辅助UI设计工具实践", url: "#" }
      ],
      extraMaterials: [
        { type: "video", text: "从草图到原型：AI加速设计流程", url: "#" },
        { type: "pdf", text: "AI与用户体验研究", url: "#" }
      ],
      detailedContent: "深入研究AI在UI/UX设计中的应用，包括自动布局生成、组件识别、原型转代码等技术。学习如何利用AI工具提高设计效率，实现快速原型设计和迭代。探讨AI如何帮助设计师更好地理解用户需求和行为模式。"
    },
    {
      date: "3/22",
      topic: "AI与品牌设计创新",
      slidesPDF: [
        { text: "AI品牌识别系统", url: "#" },
        { text: "生成式设计方法论", url: "#" }
      ],
      slidesPPT: [
        { text: "AI品牌识别系统", url: "#" },
        { text: "生成式设计方法论", url: "#" }
      ],
      videos: [
        { text: "第5讲：AI辅助品牌设计案例分析", url: "#" },
        { text: "第6讲：设计系统自动化与AI", url: "#" }
      ],
      extraMaterials: [
        { type: "video", text: "AI时代的品牌一致性管理", url: "#" },
        { type: "video", text: "生成式设计的伦理与版权问题", url: "#" }
      ],
      detailedContent: "探索AI在品牌设计中的创新应用，包括logo生成、视觉识别系统自动化、多媒体内容生成等。学习如何利用AI工具创建一致且富有创意的品牌体验，同时保持品牌的独特性和识别度。讨论AI设计中的伦理问题和版权挑战。"
    }
  ];

  return (
    <section id="syllabus" className="section course-materials-section">
      <div className="section-header">
        <h2 className="section-title">Course Materials</h2>
        <button 
          className="expand-all-button" 
          onClick={toggleAllRows}
          title={expandAll ? "折叠全部" : "展开全部"}
        >
          {expandAll ? "▲" : "▼"}
        </button>
      </div>
      
      <div className="course-materials-container">
        <table className="course-materials-table">
          <thead>
            <tr>
              <th className="date-col">日期</th>
              <th className="topic-col">主题</th>
              <th className="slides-col">幻灯片 (PDF)</th>
              <th className="slides-col">幻灯片 (PPT)</th>
              <th className="videos-col">视频</th>
              <th className="extra-col">额外材料</th>
            </tr>
          </thead>
          <tbody>
            {courseMaterials.map((material, index) => (
              <React.Fragment key={index}>
                <tr className="material-row">
                  <td className="date-cell">{material.date}</td>
                  <td className="topic-cell">
                    <button 
                      className={`topic-button ${expandedRows[index] ? 'expanded' : ''}`}
                      onClick={() => toggleRow(index)}
                    >
                      {material.topic}
                      <span className="dropdown-icon">{expandedRows[index] ? '▲' : '▼'}</span>
                    </button>
                  </td>
                  <td className="slides-cell">
                    {material.slidesPDF.map((slide, i) => (
                      <div key={i} className="material-link-wrapper">
                        <FileLink type="pdf" text={slide.text} url={slide.url} />
                      </div>
                    ))}
                  </td>
                  <td className="slides-cell">
                    {material.slidesPPT.map((slide, i) => (
                      <div key={i} className="material-link-wrapper">
                        <FileLink type="ppt" text={slide.text} url={slide.url} />
                      </div>
                    ))}
                  </td>
                  <td className="videos-cell">
                    {material.videos.map((video, i) => (
                      <div key={i} className="material-link-wrapper">
                        <FileLink type="video" text={video.text} url={video.url} />
                      </div>
                    ))}
                  </td>
                  <td className="extra-cell">
                    {material.extraMaterials.map((extra, i) => (
                      <div key={i} className="material-link-wrapper">
                        <FileLink type={extra.type || "link"} text={extra.text} url={extra.url} />
                      </div>
                    ))}
                  </td>
                </tr>
                {expandedRows[index] && (
                  <tr className="detailed-content-row">
                    <td colSpan="6" className="detailed-content-cell">
                      <div className="detailed-content">
                        <h4>课程详情：</h4>
                        <p>{material.detailedContent}</p>
                      </div>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Syllabus; 