import { ArchiveCard, SearchInput, Sidebar } from "../../components";
import { useAuth, useNote } from "../../contexts";
import { deleteArchiveNote, restoreArchiveNote } from "../../services";
import "./Archive.css";

const Archive = () => {
  const {
    noteState: { archiveNotes },
    noteDispatch,
  } = useNote();

  const {
    state: { encodedToken },
  } = useAuth();

  const restoreArchiveNoteHandler = async (noteId) => {
    const { archives, notes } = await restoreArchiveNote(noteId, encodedToken);
    noteDispatch({
      type: "ARCHIVE_AND_UNARCHIVE_NOTE",
      payload: { archives, notes },
    });
  };

  const deleteArchiveNoteHandler = async (noteId) => {
    const updatedArchiveNote = await deleteArchiveNote(noteId, encodedToken);
    noteDispatch({ type: "DELETE_ARCHIVE_NOTE", payload: updatedArchiveNote });
  };

  const moveArchiveNoteToTrash = (trashNoteData) => {
    noteDispatch({ type: "TRASH_NOTE", payload: trashNoteData });
    archiveNotes.find((archiveNoteData) =>
      archiveNoteData._id === trashNoteData._id
        ? deleteArchiveNoteHandler(archiveNoteData._id)
        : ""
    );
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
            moveArchiveNoteToTrash={moveArchiveNoteToTrash}
          />
        ))}
      </section>
    </section>
  );
};

export { Archive };
