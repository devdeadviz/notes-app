import { useState } from "react";
import { NoteCard, NoteForm, Sidebar } from "../../components";
import { useAuth, useNote } from "../../contexts";
import { useToast } from "../../custom-hooks";
import { addNote } from "../../services";
import "./HomePage.css";

const HomePage = () => {
  const [note, setNote] = useState({ title: "", body: "", createdAt: "" });

  const {
    state: { encodedToken },
  } = useAuth();

  const {
    noteState: { newNotes },
    noteDispatch,
  } = useNote();

const { showToast } = useToast()

  const addNoteHandler = async (e, note) => {
    e.preventDefault();
    const notes = await addNote(note, encodedToken, showToast);
    noteDispatch({ type: "ADD_NOTE", payload: notes });
  };

  return (
    <section className="homepage-wrapper flex">
      <Sidebar />
      <section className="homepage-main-section flex flexCol flexAlignItemsCenter pt-2">
        <div className="homepage-search-input-wrapper flex flexAlignItemsCenter">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input
            className="homepage-search-input"
            type="text"
            placeholder="Search"
          />
          <i className="fa-solid fa-bars"></i>
        </div>
        <NoteForm
          note={note}
          setNote={setNote}
          addNoteHandler={addNoteHandler}
        />
        {newNotes.map((noteData) => (
          <NoteCard note={noteData} />
        ))}
      </section>
    </section>
  );
};

export { HomePage };
