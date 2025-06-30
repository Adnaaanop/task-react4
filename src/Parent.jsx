import React, { useState } from 'react'
import Child from './Child'

function Parent() {
    const [name,setName]=useState("")
  return (
    <>
    <h1>Hello parent here and the text written on child: {name} </h1>
    <Child setName={setName}/>
    </>
  )
}
export default Parent