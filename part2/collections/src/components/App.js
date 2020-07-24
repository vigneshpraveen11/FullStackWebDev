import React from 'react';
import Notes from './Notes'


const App = ({ notes }) => {

    return (
        <div>
            <h1>Notes</h1>
            <ul>
                {
                    notes.map(note =>
                        <Notes key={note.id} content={note.content} date = {note.date} />
                )}
            </ul>
        </div>
    )
}

export default App