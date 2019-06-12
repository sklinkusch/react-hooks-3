// import react and hook
import React, { useRef } from 'react'


// create a functional component for form

const RefHook = () => {
  const nameRef = useRef(null)
  // function to call clicking the button
  const giveMeRefs = () => {
    const theRef = nameRef.current.value;
    console.log(theRef)
  }
  return (
    <>
      <input defaultValue="stefan" ref={nameRef} />
      <button onClick={giveMeRefs}>Click Me Hook</button>
    </>
  )
}

export default RefHook;
