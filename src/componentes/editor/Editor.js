import React, {useState } from 'react';
import './editor.scss';

const Editor = ({touch, setTouch, input, setInput}) => {
   
   const handleChange=(e)=>{
      setInput(e.target.value)
   }
   const handleTouch=()=>{
      setTouch(!touch)
     }
  
  return (
    <div className={touch ? "editor" : "editorMax" }>
        <div className="editor__head">
        <i className="fa-solid fa-code"></i>
        <div className="editor__title">
        <h1>Editar</h1>
        </div>
        <i id='maximize' className="fa-solid fa-minimize" onClick={handleTouch}></i>
        </div>
        {/* The code below is a conditional rederization of classes */}
        <div className="editor__text">
             <textarea name="text" value={input} id="editor" cols="50" rows="30" onChange={handleChange}></textarea>
        </div>
    </div>
  )
}

export default Editor