import React from 'react';
import Error from './Error.jpg'
import {useEffect} from 'react'
const style={
  'margin':'0',
  'padding':'0',
  'background':`url('${Error}')`,
  'backgroundRepeat':'no-repeat',
  'backgroundPosition':'left 50% top 50%',
  'width':'100%',
  'height':'100%',
  'display':'flex',
  'flexFlow':'column wrap',
  'justifyContent':'center',
  'alignItems':'center'
}

export function ErrorPage(){

  useEffect(()=>{
    console.log("effect ran")
  })
  return(
    <div className="errorContainer" style={style}>
    {console.log("rendered")}
    <h1 style={{'marginTop':'200px'}}>Oops, Wrong turn...</h1>
    <p style={{'marginTop':'10px'}}>Page Not Found..</p>
    </div>
  );
}
