import React, { useState }from 'react';
import './index.css';

function App() {
const [text,setText] = useState('Marco')
const [text2,setText2] = useState('Polo')

const handleClick=()=>{

  text==='Marco'? setText('Polo'): setText('Marco')
  text2==='Polo'? setText2('Macro'): setText2('Polo')
}

  return (
    <>
    <h1>{text}</h1>
    <button onClick={handleClick}>{text2}</button>
    </>
  );
}

export default  App;