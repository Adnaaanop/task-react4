import React, { useState } from 'react'

function Child({setName}) {
    
  return (
    <>
    
    <input type='text' placeholder='Enter something' onChange={(e)=>setName(e.target.value)}></input>
    </>
  )  
}

export default Child