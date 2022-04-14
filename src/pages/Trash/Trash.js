import { TrashCard, SearchInput, Sidebar } from "../../components";
import { useAuth, useNote } from "../../contexts";
import { useToast } from "../../custom-hooks";
import { addNote } from "../../services";
import "./Trash.css";

const Trash = () => {
  const {
    noteState: { trashNotes },
    noteDispatch,
  } = useNote();

  const {
    state: { encodedToken },
  } = useAuth();

  const { showToast } = useToast();

  const deleteNoteFromTrashHandler = (noteId) => {
    const updatedTrashData = trashNotes.filter(
      (trashData) => trashData._id !== noteId
    );
    noteDispatch({ type: "DELETE_FOREVER", payload: updatedTrashData });
    showToast("Note Deleted From Trash!", "success")
  };

  const restoreTrashNoteHandler = async (note) => {
    const restoredNotes = await addNote(note, encodedToken, showToast);
    noteDispatch({ type: "ADD_NOTE", payload: restoredNotes });
    deleteNoteFromTrashHandler(note._id);
    showToast("Restored Note From Trash!", "success")
  };

  return (
    <section className="trash-wrapper flex">
      <Sidebar showBtn={false} />
      <section className="trash-main-section flex flexCol flexAlignItemsCenter pt-2">
        <SearchInput />
        {trashNotes.map((trashNoteData) => (
          <TrashCard
            key={trashNoteData._id}
            note={trashNoteData}
            deleteNoteFromTrashHandler={deleteNoteFromTrashHandler}
            restoreTrashNoteHandler={restoreTrashNoteHandler}
          />
        ))}
      </section>
    </section>
  );
};

export { Trash };
