import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';


const Toggle = () => {
  const [isToggled, setToggle] = useState(false);
  const fade = useSpring({
    opacity: isToggled ? 0 : 1,
    fontSize: isToggled ? '2rem' : '5em',
    color: isToggled ? 'tomato' : 'green',
    transform: isToggled ? 'translate3d(0,0,0)' : 'translate3d(0,-50px,0)',
  });


  return (
    <div>
      <animated.h1 style={fade}>Hallo Miamora</animated.h1>
      <button
        onClick={() => setToggle(!isToggled)}
      >
        Ich liebe dich
      </button>
    </div>
  )
}

export default Toggle;
