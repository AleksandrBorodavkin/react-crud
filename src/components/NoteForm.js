import React, {useState} from 'react'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function NoteForm(props) {

    const [count, setCount] = useState(props.count);

    const [value, setValue] = useState();

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newNote = {
            "id": count,
            "content": value
        }
        fetch(process.env.REACT_APP_NOTES_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(newNote)
        }).then(() => {
            setCount(prevCount => count + 1)
            setValue(prevValue => '')
            props.loadFunction()
        });

    }

    return (
        <Form onSubmit={handleSubmit}>

            <Form.Group className="mb-3"
                        >
                <Form.Label>New Note</Form.Label>
                <Form.Control as="textarea" rows={3}
                              onChange={handleChange}
                              defaultValue={value}
                              value={value}
                              name="name"/>
                <Button  type="submit">Добавить</Button>
            </Form.Group>
        </Form>

    );
}


export default NoteForm