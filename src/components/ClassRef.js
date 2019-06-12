import React from 'react'

export default class ClassRef extends React.Component {
  constructor(props) {
    super(props)
    this.myRef = React.createRef();
  }

  giveMeRefs = () => {
    const theRef = this.myRef.current.value;
    console.log(theRef)
  }

  render() {
    return (
      <>
        <input type="text" defaultValue="stefan" ref={this.myRef} />
        <button onClick={this.giveMeRefs}>Click me</button>
      </>)
  }
}