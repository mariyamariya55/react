import React from 'react'

// function ReactPropsChild(props) {
    function ReactPropsChild({n,m,z}) {
    // let x = props.n
    // let b = props.m
 //   console.log(props)
  return (
    <div>
      <h1>child comp
        {n}
        <br />
        {m}
        {/* {props.z} */}
        {z}
      </h1>
    </div>
  )
}

export default ReactPropsChild
