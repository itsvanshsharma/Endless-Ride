import React from 'react';
import '../Css/Component7.css';

const ContactDetail = ({ icon, title, content }) => {
  return (
    <div className="social">
      <img src={icon} alt={`${title} icon`} />
      <div>
        <h1>{title}</h1>
        <p dangerouslySetInnerHTML={{ __html: content }}></p>
      </div>
    </div>
  );
};

const Component7 = () => {
  return (
    <>
      <div className="box13">
        <h1>START YOUR JOURNEY</h1>
        <p className="p72">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit
          amet.
        </p>
      </div>
      <img src="images/location.png" alt="location" id="location" />
      <div className="box14">
        <div className="contact">
          <ContactDetail 
            icon="images/Icon(1).png"
            title="Email"
            content="free@psdfreebies.com<br />free@psdfreebies.com"
          />
          <ContactDetail 
            icon="images/icon (3).png"
            title="Phone"
            content="+123 456 7890<br />+123 456 7890"
          />
          <ContactDetail 
            icon="images/Icon(2).png"
            title="Address"
            content="123, Main Road, New City,<br />My Country 123456"
          />
        </div>
        <div className="icons">
          <i className="fa-brands fa-facebook-f" />
          <i className="fa-brands fa-google-plus-g" />
          <i className="fa-brands fa-wikipedia-w" />
          <i className="fa-brands fa-youtube" />
          <i className="fa-brands fa-linkedin-in" />
          <i className="fa-brands fa-digg" />
          <i className="fa-brands fa-instagram" />
        </div>
      </div>
    </>
  );
};

export default Component7;
