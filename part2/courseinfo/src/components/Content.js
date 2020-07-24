import React from 'react'
import Part from './Part'
import Total from './Total'
const Content = (props) =>
  <>
    {props.parts.map(part =>
      <Part key= {part.id} part={part} />
    )}
    <Total sum={props.sum} />
  </>

export default Content