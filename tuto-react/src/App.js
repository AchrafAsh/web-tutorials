import React, { useState, useEffect, useRef } from 'react';
import styled, { ThemeProvider, css } from 'styled-components';

function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

const GridContainer = styled.div`
  max-width: 100vw;
  height: 100%;
  padding: 20px 40px;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 20px;
  @media screen and (max-width: 700px) {
    grid-template-columns: repeat(3, 1fr);
    transition: delay 1s ease 2s;
  }
`;

const NavLink = styled.a`
  color: grey;
  text-align: center;
  text-decoration: none;
  position: relative;
  cursor: pointer;
  transition: color 0.5s;
  &:hover {
    color: black;
  }
  &::after {
    content: '';
    display: block;
    position: absolute;
    height: 3px;
    width: 0;
    background: red;
    left: 50%;
    transition: width 1s, left 1s;
  }
  &:hover::after {
    width: 50%;
    left: 25%;
    transition: width 0.5s, left 0.5s;
  }
`;

const App = () => {
  const navLinks = [
    'Home',
    'Services',
    'About',
    'Portfolio',
    'Blog',
    'Tutorials',
    'Contact'
  ];

  let [count, setCount] = useState(0);

  return (
    <GridContainer>
      {navLinks.map((link, index) => (
        <NavLink key={index}>{link}</NavLink>
      ))}
      <div>{count}</div>
      {/* <button onClick={() => useInterval(() => setCount(count + 1), 250)}>
        Start Counter
      </button> */}
    </GridContainer>
  );
};

export default App;
