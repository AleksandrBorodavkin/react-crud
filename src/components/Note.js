import React from 'react'
import {Card, Button} from "react-bootstrap";

function Note(props) {
    const note = props.note

    const deleteNote = (id) => {
        fetch(process.env.REACT_APP_NOTES_URL + '/' + id, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            }
        }).then((result) => {
            props.loadFunction()
            console.log('test')
        }).catch((err) => {

        })
    }
    return (
        <div className='note' key={note.id}>
            <Card style={{width: '25rem'}}>
                <Card.Body>
                    <Card.Header>
                        Note {note.id}
                    </Card.Header>
                    <Card.Text variant="body2" color="text.secondary">
                        {note.content}
                    </Card.Text>
                </Card.Body>

                <Button size="small"
                        onClick={() => deleteNote(note.id)}>Удалить</Button>
            </Card>
        </div>
    )
}

export default Note