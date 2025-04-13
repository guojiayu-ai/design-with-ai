import React from 'react';

const FAQ = () => {
  const faqs = [
    {
      question: "这门课程的目的是什么？",
      answer: "本课程旨在帮助学生了解和应用人工智能在设计领域的最新进展，培养跨学科思维与创新能力。通过理论学习和实践项目，学生将掌握AI驱动的设计工具和方法。",
    },
    {
      question: "这门课适合什么背景的学生？",
      answer: "本课程适合设计背景和技术背景的学生。对于设计专业学生，课程将帮助掌握AI技术原理；对于技术背景学生，将引导建立设计思维框架。不需要编程经验，但需要对新技术有学习热情。",
    },
    {
      question: "使用哪些AI工具和平台？",
      answer: "课程将使用Midjourney、DALL-E、Stable Diffusion等前沿生成式AI工具，以及Coze平台进行智能体开发。我们会提供使用指南和教程，帮助学生快速上手。",
    },
    {
      question: "课程的考核方式是什么？",
      answer: "课程考核包括课堂参与度、阶段性作业和期末项目三部分。期末项目要求学生运用所学知识，创建一个AI辅助的设计作品或系统。",
    },
    // 你可以按需添加更多的FAQ项目
  ];

  return (
    <section id="faq" className="section faq-section">
      <h2 className="section-title">常见问题</h2>
      <div className="faq-intro">
        <p>以下是关于"Design with AI"课程的常见问题解答。如有其他问题，欢迎联系课程教师团队。</p>
      </div>
      
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <h3 className="faq-question">Q{index + 1}：{faq.question}</h3>
            <div className="faq-answer">
              <p>A{index + 1}：{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ; 