import { useState } from 'react';
import './App.css';
import Component1 from './Components/Component1';
import Component2 from './Components/Component2';
import Component3 from './Components/Component3';
import Component4 from './Components/Component4';
import Component5 from './Components/Component5';
import Component6 from './Components/Component6';
import Component7 from './Components/Component7';
import Component8 from './Components/Component8';

function App() {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset;
    if (scrollTop > 200) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  window.addEventListener('scroll', handleScroll);

  return (
    <>
      <Component1 />
      <div className="tour-list" id="tour">
        <Component2
          imageUrl="https://i.ibb.co/KsH4VZj/Image.png"
          title="Motorcycle Expeditions"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quod, aut hic nisi fugiat dolor eligendi adipisci eius facilis tempora."
        />
        <Component2
          imageUrl="https://i.ibb.co/D5wCsgN/Image-1.png"
          title="Mountains Motorcycle Tours"
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam quaerat voluptatibus modi nobis dolorem quisquam cum."
        />
        <Component2
          imageUrl="https://i.ibb.co/wNcthVz/Image-2.png"
          title="Motorcycle Adventure Tours"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia quasi eum a, odio ipsa placeat. At quia veniam dolore itaque!"
        />
      </div>
      <Component3 />
      <Component4 />
      <Component5 />
      <Component6 />
      <Component7 />
      <Component8 />
      {showButton && (
        <button className="scroll-to-top" onClick={scrollToTop}>
          <i className="fas fa-arrow-up"></i> 
        </button>
      )}
    </>
  );
}

export default App;
