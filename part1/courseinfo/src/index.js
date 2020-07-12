import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {CountApp} from './threeButtonApp'
const course = {
  name: 'Half Stack application development',
  parts: [
    {
      name: 'Fundamentals of React',
      exercise: 10
    },
    {
      name: 'Using props to pass data',
      exercise: 7
    },
    {
      name: 'State of a component',
      exercise: 14
    }

  ]
}
//let counter = 1;
const Header = (props) => <h1>{props.course}</h1>

const Part = (props) =>
  <>
    <p>
      {props.part.name} {props.part.exercise}
    </p>
  </>

const Content = (props) =>
  <>
    <Part part={props.parts[0]} />
    <Part part={props.parts[1]} />
    <Part part={props.parts[2]} />
  </>

const Button = ({handleClick, name}) => {
  return (
  <button onClick = {handleClick}>{name}</button>
  )
}

const Display = ({counter}) => <p>{counter}</p>
const Total = (props) =>
  <p>Number of exercises {props.parts[0].exercise + props.parts[1].exercise + props.parts[2].exercise}</p>


const Hello = ({name, age}) =>{

  const getBornYear = () => new Date().getFullYear() - age

  return (
  <p>Hello {name}, you were born in {getBornYear()}</p>
  )
}

const App = () => {

  const [counter, setCounter] = useState(0)

  // setTimeout(() =>{
  //   setCounter(counter * counter)
  // }, 1000)
  const increaseOne = () => setCounter(counter + 1)
  const resetCounter = () => setCounter(0);
  const decreaseOne = () => setCounter(counter - 1)
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
      <Hello name = "Harry" age = {34} />
      <Button handleClick = {increaseOne} name="Add 1"/>  
      <Button handleClick = {decreaseOne} name="Subtract 1"/>    
      <Display counter = {counter} />
      <Button handleClick = {resetCounter} name="Reset"/>
     
    </div>
  )
}
//const refresh = () => ReactDOM.render(<App />, document.getElementById('root'))
//ReactDOM.render(<App />, document.getElementById('root'))
ReactDOM.render(<CountApp />, document.getElementById('root'))
// counter+=1
// refresh()
// counter+=1
// refresh()
// counter+=2
// refresh()


// setInterval(() =>{
//   counter++;
//   refresh()
// }, 1000)
