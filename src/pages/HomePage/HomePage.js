import { useState } from "react";
import { NoteCard, NoteForm, SearchInput, Sidebar } from "../../components";
import { useAuth, useNote } from "../../contexts";
import { useToast } from "../../custom-hooks";
import { addNote, deleteNote, editNote } from "../../services";
import "./HomePage.css";

const HomePage = () => {
  const [note, setNote] = useState({ title: "", body: "", createdAt: "" });
  const [showNoteForm, setShowNoteForm] = useState(false);

  const {
    state: { encodedToken },
  } = useAuth();

  const {
    noteState: { newNotes },
    noteDispatch,
  } = useNote();

  const { showToast } = useToast();

  const addNoteHandler = async (e, note) => {
    e.preventDefault();
    const notes = await addNote(note, encodedToken, showToast);
    noteDispatch({ type: "ADD_NOTE", payload: notes });
    setNote({ ...note, title: "", body: "", createdAt: "" });
    setShowNoteForm(false);
  };

  const editNoteHandler = (editNote) => {
    setNote({
      ...note,
      title: editNote.title,
      body: editNote.body,
      _id: editNote._id,
    });
    noteDispatch({ type: "EDIT_NOTE" });
    setShowNoteForm(true);
  };

  const updateNoteHandler = async (e, editedNotesData) => {
    e.preventDefault();
    const editedNote = await editNote(
      editedNotesData._id,
      editedNotesData,
      encodedToken,
      showToast
    );
    noteDispatch({ type: "UPDATE_NOTE", payload: editedNote });
    setNote({ ...note, title: "", body: "", createdAt: "" });
    setShowNoteForm(false);
  };

  const deleteNoteHandler = async (notesId) => {
    const deletedNoteData = await deleteNote(notesId, encodedToken);
    noteDispatch({ type: "DELETE_NOTE", payload: deletedNoteData });
  };

  const moveNoteToTrash = (trashNoteData) => {
    noteDispatch({ type: "TRASH_NOTE", payload: trashNoteData });
    showToast("Note moved to Trash!", "success");
    newNotes.find((newNoteData) =>
      newNoteData._id === trashNoteData._id
        ? deleteNoteHandler(trashNoteData._id)
        : ""
    );
  };

  return (
    <section className="homepage-wrapper flex">
      <Sidebar setShowNoteForm={setShowNoteForm} />
      <section className="homepage-main-section flex flexCol flexAlignItemsCenter pt-2">
        <SearchInput />
        {showNoteForm && (
          <NoteForm
            note={note}
            setNote={setNote}
            addNoteHandler={addNoteHandler}
            updateNoteHandler={updateNoteHandler}
          />
        )}
        {newNotes.map((noteData) => (
          <NoteCard
            key={noteData._id}
            note={noteData}
            editNoteHandler={editNoteHandler}
            moveNoteToTrash={moveNoteToTrash}
          />
        ))}
      </section>
    </section>
  );
};

export { HomePage };
