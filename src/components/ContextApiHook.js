// import react and hook
import React, { useContext } from 'react';

// create context
const NumberContext = React.createContext();

// create provider
export default function Context() {
  return (
    <NumberContext.Provider value={42}>
      <Display />
    </NumberContext.Provider>
  )
}

// use hook in consumer
function Display() {
  const value = useContext(NumberContext)
  return (<div>The answer is {value} to everything!</div>)
}
