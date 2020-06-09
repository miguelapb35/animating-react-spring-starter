import React from 'react';
import { useSpring, animated } from 'react-spring';
import Toggle from './Toggle';
import logo from './logo.svg';
import './App.css';



const App = () => {
  const fade = useSpring({ from: {
      opacity: 0
    },
    opacity: 1
  });

  // Shorter syntax
 // const fade = useSpring({ from: { opacity: 0 }, opacity: 1 });


    return (
      <animated.div className="App" style={fade}>
        <header className="App-header">
          <img src={logo} className="logo" alt="img" />
          <button className="menu-button">Menu</button>
        </header>
        <main className='texto'>
          <h3>Simple animations with</h3>
          <h2>React Spring</h2>
          <Toggle />
        </main>
      </animated.div>
    );
} 



export default App;
