import React from 'react';

const CourseFeatures = () => {
  return (
    <section className="section">
      <h2 className="section-title">课程特色</h2>
      
      <div className="features">
        <div className="feature-card">
          <div className="feature-icon">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#003366" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
              <path d="M2 17L12 22L22 17" stroke="#003366" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
              <path d="M2 12L12 17L22 12" stroke="#003366" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
          </div>
          <h3 className="feature-title">理论与技术基础</h3>
          <p>学习人工智能的核心概念、机器学习基础以及神经网络原理，特别关注与设计相关的AI模型，如GAN、扩散模型和大型语言模型等。课程采用通俗易懂的方式讲解复杂概念，无需高级数学背景。</p>
        </div>
        
        <div className="feature-card">
          <div className="feature-icon">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 19L19 12L22 15L15 22L12 19Z" stroke="#003366" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
              <path d="M18 13L16.5 5.5L2 2L5.5 16.5L13 18L18 13Z" stroke="#003366" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
              <path d="M2 2L9.5 9.5" stroke="#003366" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
              <circle cx="13" cy="13" r="2" stroke="#003366" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></circle>
            </svg>
          </div>
          <h3 className="feature-title">工具与方法实践</h3>
          <p>深入探索前沿AI设计工具，包括Midjourney、DALL-E、Stable Diffusion等图像生成工具，以及基于AI的UI/UX设计辅助工具。学习如何有效提示(Prompt)、调整参数并将AI工具整合到设计工作流程中。</p>
        </div>
        
        <div className="feature-card">
          <div className="feature-icon">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17 21V19C17 16.7909 15.2091 15 13 15H5C2.79086 15 1 16.7909 1 19V21" stroke="#003366" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
              <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="#003366" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
              <path d="M23 21V19C22.9986 17.1771 21.765 15.5857 20 15.13" stroke="#003366" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
              <path d="M16 3.13C17.7699 3.58317 19.0078 5.17799 19.0078 7.005C19.0078 8.83201 17.7699 10.4268 16 10.88" stroke="#003366" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
          </div>
          <h3 className="feature-title">批判性思维与伦理</h3>
          <p>培养对AI设计的批判性思考能力，探讨AI在设计中的伦理问题、创意归属、版权考量以及对设计行业的影响。通过案例研究和讨论，形成对AI设计的全面、深入理解。</p>
        </div>
      </div>
    </section>
  );
};

export default CourseFeatures; 