// import react and hook useReducer
import React, { useReducer } from 'react'

const initialState = { count: 0 }

// create the reducer
function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 }
    case 'decrement':
      return { count: state.count - 1 }
    default:
      return { count: state.count }
    // throw new Error()
  }
}

// function using the hook reducer - here we dispatch ACTIONS

export default function ReduceCounter() {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
      <p>Counter: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
    </div>
  )
}