import React, { useState } from 'react'
import './previsor.scss'
import ReactMarkdown from 'react-markdown';

const Previsor = ({input,touch, setTouch}) => {
   
  const handleTouch=()=>{
    setTouch(!touch)
   }

  return (
    <div className={touch ? "previsor" : "previsorMax" }  id="preview">
        
        <ReactMarkdown >{input}</ReactMarkdown>
        </div>
  )
}

export default Previsor