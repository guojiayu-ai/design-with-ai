import React from 'react';

const SocialLink = ({ icon }) => (
  <a href="#" className="social-link">
    {icon}
  </a>
);

const Footer = () => {
  const socialIcons = {
    twitter: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M23 3C22.0424 3.41029 21.0251 3.68043 20 3.79C19.0718 2.73961 17.7167 2 16.2 2C13.28 2 10.9 4.38 10.9 7.3C10.9 7.73 10.94 8.15 11.02 8.56C7.1 8.36 3.78 6.77 1.64 4.28C1.21 5.03 0.97 5.89 0.97 6.8C0.97 8.7 2.03 10.35 3.53 11.29C2.66 11.26 1.83 11.04 1.1 10.65C1.1 10.67 1.1 10.69 1.1 10.71C1.1 13.37 3.01 15.6 5.56 16.09C5.12 16.21 4.67 16.27 4.2 16.27C3.86 16.27 3.53 16.24 3.21 16.18C3.9 18.36 5.91 19.93 8.28 19.97C6.38 21.43 4.04 22.3 1.5 22.3C1.08 22.3 0.67 22.28 0.27 22.23C2.69 23.8 5.58 24.67 8.69 24.67C16.2 24.67 20.94 18.41 20.94 12.98C20.94 12.78 20.94 12.59 20.93 12.4C21.75 11.79 22.46 11.06 23 10.23C22.1 10.64 21.15 10.9 20.15 11C21.17 10.37 21.94 9.37 22.31 8.22C21.39 8.78 20.38 9.19 19.3 9.4C18.4 8.43 17.07 7.8 15.6 7.8C13.18 7.8 11.2 9.78 11.2 12.2C11.2 12.55 11.24 12.9 11.31 13.23C7.64 13.04 4.46 11.31 2.27 8.6C1.88 9.3 1.67 10.1 1.67 10.94C1.67 12.54 2.59 13.95 3.92 14.79C3.14 14.77 2.4 14.54 1.77 14.19C1.77 14.21 1.77 14.23 1.77 14.25C1.77 16.39 3.3 18.17 5.43 18.59C5.01 18.7 4.56 18.76 4.1 18.76C3.81 18.76 3.53 18.73 3.26 18.67C3.83 20.47 5.48 21.72 7.47 21.76C5.92 22.96 4.03 23.67 2 23.67C1.62 23.67 1.25 23.65 0.88 23.6C3.01 25.05 5.5 25.84 8.17 25.84C15.56 25.84 20.14 19.73 20.14 14.34C20.14 14.14 20.14 13.95 20.13 13.75C20.92 13.18 21.62 12.49 22.2 11.7C21.36 12.08 20.46 12.33 19.52 12.43C20.5 11.82 21.25 10.86 21.63 9.74C20.75 10.27 19.78 10.66 18.75 10.88Z" fill="white"></path>
      </svg>
    ),
    linkedin: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
        <path d="M6 9H2V21H6V9Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
        <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
      </svg>
    ),
    facebook: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
      </svg>
    ),
    website: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
        <path d="M16.2399 7.76001C14.3799 6.45001 12.0999 6.15001 10.0099 6.94001C7.91994 7.74001 6.35994 9.67001 6.06994 11.89" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
        <path d="M8.56006 7.32001L6.13006 7.76001L6.58006 10.19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
        <path d="M7.76001 16.24C9.62001 17.55 11.9 17.85 13.99 17.06C16.08 16.26 17.64 14.33 17.93 12.11" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
        <path d="M15.4399 16.68L17.8699 16.24L17.4199 13.81" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
      </svg>
    )
  };

  return (
    <footer className="footer">
      <div className="footer-logo">
        <div className="logo-icon" style={{margin: "0 auto", width: "50px", height: "50px"}}>
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.24 12.24C21.3658 11.1142 21.9983 9.58722 21.9983 7.99504C21.9983 6.40285 21.3658 4.87588 20.24 3.75004C19.1142 2.62419 17.5872 1.9917 15.995 1.9917C14.4028 1.9917 12.8758 2.62419 11.75 3.75004L5 10.5V19H13.5L20.24 12.24Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
            <path d="M16 8L2 22" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
            <path d="M17.5 15H9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
          </svg>
        </div>
      </div>
      
      <div className="social-links">
        <SocialLink icon={socialIcons.twitter} />
        <SocialLink icon={socialIcons.linkedin} />
        <SocialLink icon={socialIcons.facebook} />
        <SocialLink icon={socialIcons.website} />
      </div>
    </footer>
  );
};

export default Footer; 