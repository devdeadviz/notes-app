import { ArchiveCard, SearchInput, Sidebar } from "../../components";
import { useAuth, useNote } from "../../contexts";
import { restoreArchiveNote } from "../../services";
import "./Archive.css";

const Archive = () => {
  const {
    noteState: { archiveNotes }, noteDispatch
  } = useNote();

  const {
    state: { encodedToken },
  } = useAuth();

  const restoreArchiveNoteHandler = async (noteId) => {
    const { archives, notes } = await restoreArchiveNote(noteId, encodedToken);
    noteDispatch({ type: "ARCHIVE_NOTE", payload: { archives, notes } })
  };

  return (
    <section className="archive-wrapper flex">
      <Sidebar />
      <section className="archive-main-section flex flexCol flexAlignItemsCenter pt-2">
        <SearchInput />
        {archiveNotes.map((archiveNoteData) => (
          <ArchiveCard
            key={archiveNoteData._id}
            note={archiveNoteData}
            restoreArchiveNoteHandler={restoreArchiveNoteHandler}
          />
        ))}
      </section>
    </section>
  );
};

export { Archive };
