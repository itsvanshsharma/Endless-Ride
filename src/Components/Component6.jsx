import React from 'react';
import '../Css/Component6.css';

const BlogPost = ({ imageUrl, title, description }) => {
  return (
    <div className="blog-post">
      <img src={imageUrl} alt="" />
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};

const Component6 = () => {
  return (
    <div className="box12" id="box12">
      <div className="box12-head">
        <h1>TRAVEL BLOG</h1>
      </div>
      <div className="box12-p">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit
        amet.
      </div>
      <div className="box12-cont">
        <BlogPost
          imageUrl="images/img.png"
          title="10 reasons why USA should be on your bucket list."
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
        />
        <BlogPost
          imageUrl="images/Img(1).png"
          title="10 reasons why USA should be on your bucket list."
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
        />
        <BlogPost
          imageUrl="images/Img(2).png"
          title="10 reasons why USA should be on your bucket list."
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
        />
      </div>
    </div>
  );
};

export default Component6;

