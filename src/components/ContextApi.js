import React from 'react'

// React Context -> create Context
const NumberContext = React.createContext();

// Context API Provider
export default function Context() {
  return (
    <NumberContext.Provider value={42}>
      <Display />
    </NumberContext.Provider>
  )
}

// Context API Consumer
function Display() {
  return (
    <NumberContext.Consumer>
      {value => <div>The answer is {value} to everything!</div>}
    </NumberContext.Consumer>
  )
}