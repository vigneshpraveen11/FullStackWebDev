import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';



const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const votesArray = new Uint32Array(anecdotes.length)

const Header = ({name}) => <h2>{name}</h2>

const Display = ({ anecdote, votes }) => {
  return(
  <div>
    <p>{anecdote}</p>
    <p>has {votes} votes</p>
  </div>
  )
}

const Button = ({ clickHandler, name }) => <button onClick={clickHandler}>{name}</button>

const App = ({ anecdotes, votes }) => {  
  const [anecdote, setAnecdote] = useState(anecdotes[0])
  const [voteCount, setVoteCount] = useState(votes)  
  const nextClickHandler = () => {    
    const randIndex = Math.floor(Math.random() * anecdotes.length)
    setAnecdote(anecdotes[randIndex])
  }
  
  const addVote = () => {
    const voteArray = [...voteCount]
    voteArray[anecdotes.indexOf(anecdote)] += 1
    setVoteCount(voteArray)
  }
  const maxVotedAnecdote = anecdotes[voteCount.indexOf(Math.max(...voteCount))]
  return (
    <div>
      <Header name = 'Anecdote of the day' />
      <Display anecdote= {anecdote} votes = {voteCount[anecdotes.indexOf(anecdote)]} />
      <Button clickHandler={nextClickHandler} name = 'next anecdote'/>
      <Button clickHandler={addVote} name = 'Vote' />
      <Header name = 'Anecdote with most votes' />
      <Display anecdote = {maxVotedAnecdote} votes = {Math.max(...voteCount)} />
    </div>
  )

}
ReactDOM.render(
  <React.StrictMode>
    <App anecdotes={anecdotes} votes = {votesArray}/>
  </React.StrictMode>,
  document.getElementById('root')
);


