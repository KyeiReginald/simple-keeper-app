import { useState } from "react";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Note from "./components/Note";
import Header from "./components/Header";

function App() {
  const [notes, setNote] = useState([
    {
      id: 1,
      noteTile: "My first idea",
      noteContent: "Expertly made, responsive, accessible components in R ",
    },
    {
      id: 2,
      noteTile: "My first idea",
      noteContent:
        "Expertly made, responsive, accessible components in React and HT",
    },
  ]);

  const handleDelete = (id: number) => {
    setNote(notes.filter((note) => note.id !== id));
  };

  const handleUpdate = (id: number) => {
    setNote(
      notes.map((note) =>
        note.id === id
          ? {
              ...note,
              noteTile: note.noteTile + 2,
              noteContent: note.noteContent + 2,
            }
          : note
      )
    );
  };

  return (
    <>
      <Header />
      <Form
        onSubmit={(note) =>
          setNote([...notes, { ...note, id: notes.length + 1 }])
        }
      />
      <Note notes={notes} onDelete={handleDelete} update={handleUpdate} />
      <Footer />
    </>
  );
}

export default App;
