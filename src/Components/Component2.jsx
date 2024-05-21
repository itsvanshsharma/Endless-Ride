import React from 'react'
import { useState } from 'react'
import '../Css/Component2.css'
const Component2 = ({ imageUrl, title, description }) => {
  return (
    <div className="box4" id="box4">
      <div className="box5">
        <img src={imageUrl} alt="" />
        <h2>{title}</h2>
        <p>{description}</p>
        <button>BOOK NOW</button>
      </div>
    </div>
  );
};

export default Component2;
