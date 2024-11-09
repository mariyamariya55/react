import React from 'react'
import ReactPropsChild from './ReactPropsChild'

function ReactProps() {
    let x = 45
    let y = "hello"
  return (
    <div>
        <h1>parent comp</h1>
      <ReactPropsChild n={x} m ={y} z ="welcome" />
    </div>
  )
}

export default ReactProps
