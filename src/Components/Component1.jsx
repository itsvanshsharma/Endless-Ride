import React, { useEffect } from 'react';
import '../Css/Component1.css';

const Component1 = () => {
  useEffect(() => {
    const bikeElement = document.getElementById('bike1');
    if (bikeElement) {
      bikeElement.classList.add('animate-in');
    }
  }, []);

  return (
    <>
      <header>
        <img src="images/Header Background.png" className="head-img" />
        <div className="nav">
          <div className="logo">
            <img src="images/logo.png" alt="" />
            <p className="one">
              ENDLESS <span style={{ color: "red" }}>RIDE</span>
            </p>
            <p className="two">TAGLINE HERE</p>
          </div>
          <div className="box1">
            <a href="Home">
              <p>HOME</p>
            </a>
            <a href="#tour">
              <p>DESTINATION</p>
            </a>
            <a href="#main">
              <p>MOTORCYCLES</p>
            </a>
            <a href="#Bikes">
              <p>RENTAL</p>
            </a>
            <a href="#box12">
              <p>BLOG</p>
            </a>
            <a href="#contact">
              <p>CONTACT</p>
            </a>
          </div>

          <div className="box2">
  <i className="fa-brands fa-youtube icon"></i>
  <i className="fa-brands fa-facebook-f icon"></i>
  <i className="fa-brands fa-google-plus-g icon"></i>
  <i className="fa-brands fa-wikipedia-w icon"></i>
</div>
        </div>
        <div className="box3">
          <p>
            2,500 tours in over 100 destinations <br />
            and 36 years of experience!
          </p>
          <img src="images/bike1.png" alt="" id="bike1" className="bike1" />
        </div>
      </header>
    </>
  );
};

export default Component1;
