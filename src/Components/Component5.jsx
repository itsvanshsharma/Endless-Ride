import { useState } from 'react'
import '../Css/Component5.css'
const Component5 = () => {
  return (
    <>
    <div className="box11" id="Bikes">
  <div className="box11-cont">
    <h1>
      Guided motorcycle tours <span style={{ color: "red" }}>since 1880.</span>
    </h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa dolore
      deserunt error, explicabo vel asperiores repudiandae harum, numquam
      expedita est voluptatum doloribus. Eos, quasi quos.
    </p>
  </div>
  <div className="cover" />
  <div className="complete-box">
    <div className="red-box">
      <div className="text1-box">
        <div className="text1">
          <h2 style={{ fontSize: 55, margin: "-15px" }}>
            1000<span style={{ fontSize: 29 }}>KM</span>
          </h2>
          <p className="days">2 DAYS</p> <br />
        </div>
        <div className="text2">
          <h1 style={{ fontSize: 87, margin: "-15px" }}>
            3000<span style={{ fontSize: 45 }}>KM</span>
          </h1>
          <p className="days" style={{ fontSize: 45 }}>
            7 DAYS
          </p>
          <br />
        </div>
      </div>
      <p className="text1-p">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit
        amet.
      </p>
    </div>
    <div className="black-box">
      <div className="text1-box">
        <div className="text1">
          <h2>
            50<span style={{ fontSize: 124 }}>+</span>
          </h2>
          <p style={{ fontSize: 45 }}>Countries</p>
        </div>
        <div className="text2">
          <h1 style={{ fontSize: 55, margin: "-15px" }}>
            1000<span style={{ fontSize: 29 }}>KM</span>
          </h1>
          <p style={{ fontSize: 29 }}>2 DAYS</p>
        </div>
      </div>
      <p className="text1-p">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit
        amet.
      </p>
    </div>
  </div>
</div>
<img src="images/Layer 3.png" alt="" id="bike3" />



    </>
  )
}

export default Component5;
