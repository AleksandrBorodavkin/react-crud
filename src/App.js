import './App.css';
import React, {useEffect, useState} from 'react'
import Notes from './components/Notes';
import NoteForm from './components/NoteForm';

function App() {

  const [notes, setNotes] = useState([])

  useEffect(() => {
    loadDefaultValues()
  }, []);

 const loadDefaultValues = () => {
    fetch(process.env.REACT_APP_NOTES_URL)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      setNotes(prevNotes => data)
    })
  }

  const count = 1

  return (
    <div className="App">
      <NoteForm loadFunction={loadDefaultValues} />
      <Notes notes={notes} count={count} loadFunction={loadDefaultValues}  />
    </div>
  );
}

export default App;

