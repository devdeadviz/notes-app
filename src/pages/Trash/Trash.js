import { TrashCard, SearchInput, Sidebar } from "../../components";
import { useNote } from "../../contexts";
import "./Trash.css";

const Trash = () => {
  const {
    noteState: { trashNotes },
    noteDispatch,
  } = useNote();

  const deleteNoteFromTrashHandler = (noteId) => {
    const updatedTrashData = trashNotes.filter(
      (trashData) => trashData._id !== noteId
    );
    noteDispatch({ type: "DELETE_FOREVER", payload: updatedTrashData });
  };

  return (
    <section className="trash-wrapper flex">
      <Sidebar />
      <section className="trash-main-section flex flexCol flexAlignItemsCenter pt-2">
        <SearchInput />
        {trashNotes.map((trashNoteData) => (
          <TrashCard
            key={trashNoteData._id}
            note={trashNoteData}
            deleteNoteFromTrashHandler={deleteNoteFromTrashHandler}
          />
        ))}
      </section>
    </section>
  );
};

export { Trash };
