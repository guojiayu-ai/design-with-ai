import React from 'react';

const FAQ = () => {
  const faqs = [
    {
      question: "这门课程的目的是什么？",
      answer: "TODO",
    },
    {
      question: "这门课的能学到什么？",
      answer: "TODO",
    },
    // 你可以按需添加更多的FAQ项目
  ];

  return (
    <section id="faq" className="section faq-section">
      <h2 className="section-title">FAQs</h2>
      <div className="faq-intro">
        <p>Read the FAQs before emailing ..... TODO</p>
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