import { ArchiveCard, SearchInput, Sidebar } from "../../components";
import { useNote } from "../../contexts";
import "./Archive.css";

const Archive = () => {

    const { noteState: { archiveNotes } } = useNote()

  return (
    <section className="archive-wrapper flex">
      <Sidebar />
      <section className="archive-main-section flex flexCol flexAlignItemsCenter pt-2">
        <SearchInput />
        {archiveNotes.map((archiveNoteData) => (
          <ArchiveCard key={archiveNoteData._id} note={archiveNoteData} />
        ))}
      </section>
    </section>
  );
};

export { Archive };
