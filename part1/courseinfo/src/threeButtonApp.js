import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const ClickHistory = ({ allClicks }) => {
    return (
        <div>{allClicks.join(' ')}</div>
    )
}

const Button = ({ handleClick, name }) => {
    return (
        <button onClick={handleClick}>{name}</button>
    )
}

const Count = ({ name, clickCount }) => <p> {name}'s clicks = {clickCount}</p>

const CountApp = () => {
    const [clicks, setClicks] = useState({ left: 0, right: 0, allClicks: [] })
    const handleLeftClick = () => setClicks(
        {
            ...clicks,
            left: clicks.left + 1,
            allClicks: clicks.allClicks.concat('L')
        })
    const handleRightClick = () => setClicks(
        {
            ...clicks,
            right: clicks.right + 1,
            allClicks: clicks.allClicks.concat('R')
        })

    return (
        <div>
            <Button name="Left Click" handleClick={handleLeftClick} />
            <Button name="Right Click" handleClick={handleRightClick} />
            <Count name="Left" clickCount={clicks.left} />
            <Count name="Right" clickCount={clicks.right} />
            <ClickHistory allClicks={clicks.allClicks} />
        </div>
    )
}

export { CountApp }