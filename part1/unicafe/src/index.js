import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Header = ({ name }) => <h1>{name}</h1>

const Button = ({ clickHandler, name }) => <button onClick={clickHandler}>{name}</button>

const Statistic = ({ name, value }) =>
  <tr>
    <td>{name} - {value}</td>
  </tr>



const Statistics = ({ good, bad, neutral }) => {
  const total = good + bad + neutral
  const reviewValue = good - bad
  const average = reviewValue / total
  const positivePercentage = (good / total) * 100
  if (!good && !bad && !neutral)
    return <p>No feedback given</p>
  return (
    <table>
      <thead></thead>
      <tbody>
        <Statistic name='Good' value={good} />
        <Statistic name='Bad' value={bad} />
        <Statistic name='Neutral' value={neutral} />
        <Statistic name='All' value={total} />
        <Statistic name='Average' value={average} />
        <Statistic name='Postitive' value={positivePercentage} />
      </tbody>
    </table>
  )
}

const App = () => {

  const [good, setGoodCount] = useState(0)
  const [bad, setBadCount] = useState(0)
  const [neutral, setNeutralCount] = useState(0)

  const goodHandler = () => setGoodCount(good + 1)
  const badHandler = () => setBadCount(bad + 1)
  const neutalHandler = () => setNeutralCount(neutral + 1)

  return (
    <div>
      <Header name='give feedback' />
      <Button name='good' clickHandler={goodHandler} />
      <Button name='neutral' clickHandler={neutalHandler} />
      <Button name='bad' clickHandler={badHandler} />
      <Header name='statistics' />
      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


