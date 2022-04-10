import { NoteCard, SearchInput, Sidebar } from "../../components";
import { useNote } from "../../contexts";
import "./Trash.css";

const Trash = () => {
  const {
    noteState: { trashNotes },
    noteDispatch,
  } = useNote();

  return (
    <section className="trash-wrapper flex">
      <Sidebar />
      <section className="trash-main-section flex flexCol flexAlignItemsCenter pt-2">
        <SearchInput />
        {trashNotes.map((trashNoteData) => (
          <NoteCard key={trashNoteData._id} trashNote={trashNoteData} />
        ))}
      </section>
    </section>
  );
};

export { Trash };
