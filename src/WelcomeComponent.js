// WelcomeComponent.js
import React, { useState, useEffect } from 'react';

const WelcomeComponent = () => {
  const [greet, setGreet] = useState('');

  useEffect(() => {
      setGreet('Hi there');

  }, []);
  
  return (
    <div>
      <h1>{greet}</h1>
      <p>Thanks for visiting.</p>
    </div>
  );
};

export default WelcomeComponent;
