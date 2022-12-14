import React from 'react'
import Note from './Note'

function Notes(props) {
    const notes = props.notes
    return (
        <div>
            {notes.map(note => <div key={note.id} ><Note note={note} loadFunction={props.loadFunction} /></div>)}
        </div>
    )
}

export default Notes