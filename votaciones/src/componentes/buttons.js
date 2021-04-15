import React from 'react'

const Buttons = (props) => { 
  return (
    <button onClick={() => {props.setValue(props.value + 1)}}>{props.name}</button>
  )
}
export default Buttons; 