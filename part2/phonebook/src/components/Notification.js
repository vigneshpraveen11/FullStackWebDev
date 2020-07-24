import React from 'react'

const Notification = ({ message, isSucess }) => {
    let msgStyle = {}
    if (!isSucess)

        msgStyle = {
            backgroundColor: 'lightgrey',
            color: 'red',
            fontSize: 20,
            fontStyle: 'bold',
            borderStyle: 'solid',
            borderRadius: 5,
            padding: 5,
            marginBottom: 10
        }

    else

        msgStyle = {
            backgroundColor: 'lightgrey',
            color: 'green',
            fontSize: 20,
            fontStyle: 'bold',
            borderStyle: 'solid',
            borderRadius: 5,
            padding: 5,
            marginBottom: 10
        }


    return (
        <div style={msgStyle}>
            {message}
        </div>
    )
}

export default Notification