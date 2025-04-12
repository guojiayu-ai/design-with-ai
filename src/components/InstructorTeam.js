import React, { useState } from 'react';

const StaffMember = ({ name, title, expertise, initial, contributor, avatar }) => {
  const initials = initial || name.charAt(0);
  const [imageError, setImageError] = useState(false);
  
  const handleImageError = () => {
    setImageError(true);
  };
  
  return (
    <div className="staff-member">
      <div className="staff-photo">
        {avatar && !imageError ? (
          <img 
            src={`${process.env.PUBLIC_URL}${avatar}`} 
            alt={name} 
            className="staff-avatar" 
            onError={handleImageError}
          />
        ) : (
          <div className="photo-placeholder">
            <span>{initial}</span>
          </div>
        )}
      </div>
      <div className="staff-info">
        <h3 className="staff-name">{name}</h3>
        {title && <p className="staff-title">{title}</p>}
        {expertise && <p className="staff-expertise">{expertise}</p>}
        {contributor && <p className="staff-contributor">{contributor}</p>}
      </div>
    </div>
  );
};

const InstructorTeam = () => {
  // 讲师团数据
  const instructors = [
    {
      name: '方可',
      expertise: 'Interdisciplinary Innovation Education',
      initial: 'F',
      avatar: '/avatar/1.png'
    },
    {
      name: '丁棘',
      expertise: 'Arts & Design',
      initial: 'D',
      avatar: '/avatar/2.png'
    },
    {
      name: '肖岚茜',
      expertise: 'AI & Design',
      initial: 'X',
      avatar: '/avatar/3.png'
    },
    {
      name: '卢雨畋',
      expertise: 'AI',
      initial: 'L',
      avatar: '/avatar/4.png'
    },
  ];

  return (
    <section id="instructors" className="section staff-section">
      {/* 讲师团部分 */}
      <h2 className="section-title">Teaching Team</h2>
      {/* <p className="staff-intro">The teaching team coordinates course instruction and specializes in various AI design aspects.</p> */}
      <div className="staff-grid instructors-grid">
        {instructors.map((instructor, index) => (
          <StaffMember
            key={index}
            name={instructor.name}
            title={instructor.title}
            expertise={instructor.expertise}
            initial={instructor.initial}
            contributor={instructor.contributor}
            avatar={instructor.avatar}
          />
        ))}
      </div>

      {/* 贡献者部分 */}
      <div className="contributors-section">
        <h3 className="subsection-title">Contributors</h3>
        <div className="contributors-wall">
          <img 
            src="https://contrib.rocks/image?repo=datawhalechina/design-with-AI" 
            alt="GitHub Contributors" 
            className="contributors-image" 
          />
        </div>
      </div>
    </section>
  );
};

export default InstructorTeam; 