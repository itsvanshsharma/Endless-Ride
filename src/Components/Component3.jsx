import React from 'react';
import '../Css/Component3.css';

const ReasonsWhyUsa = () => {
  return (
    <div>
      <h2>10 reasons why USA.</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt
      </p>
    </div>
  );
};

const Component3 = () => {
  return (
    <div className="main" id="main">
      <div className="main1">
        <div>
          <h1>We are World Wide</h1>
          <div className="content">
            <ReasonsWhyUsa />
            <ReasonsWhyUsa />
            <ReasonsWhyUsa />
          </div>
        </div>
      </div>
      <img src="images/7.png" id="bike" alt="" />
      <div className="main2">
        <div className="box">
          <div className="image">
            <img
              src="images/Place image here.png"
              alt=""
            />
          </div>
          <div className="content">
            <h2>Alex Doe</h2>
            <span className="MainRider">Main Rider</span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            </p>
          </div>
        </div>
        <div className="box">
          <div className="content">
            <h2>Steve Doe</h2>
            <span className="MainRider">Main Rider</span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            </p>
          </div>
          <div className="image">
            <img
              src="images/WhatsApp Image 2024-02-06 at 10.53.42_22e39517.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="box">
          <div className="image">
            <img src="images/8.png" alt="" />
          </div>
          <div className="content">
            <h2>Bill Doe</h2>
            <span className="MainRider">Main Rider</span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Component3;
