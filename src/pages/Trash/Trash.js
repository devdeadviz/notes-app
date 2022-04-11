import { TrashCard, SearchInput, Sidebar } from "../../components";
import { useNote } from "../../contexts";
import "./Trash.css";

const Trash = () => {
  const {
    noteState: { trashNotes }
  } = useNote();

  return (
    <section className="trash-wrapper flex">
      <Sidebar />
      <section className="trash-main-section flex flexCol flexAlignItemsCenter pt-2">
        <SearchInput />
        {trashNotes.map((trashNoteData) => (
          <TrashCard key={trashNoteData._id} note={trashNoteData} />
        ))}
      </section>
    </section>
  );
};

export { Trash };
