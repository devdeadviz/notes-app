import { ArchiveCard, SearchInput, Sidebar } from "../../components";
import { useAuth, useNote } from "../../contexts";
import { useToast } from "../../custom-hooks";
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

  const { showToast } = useToast();

  const restoreArchiveNoteHandler = async (noteId) => {
    const { archives, notes } = await restoreArchiveNote(noteId, encodedToken, showToast);
    noteDispatch({
      type: "ARCHIVE_AND_UNARCHIVE_NOTE",
      payload: { archives, notes },
    });
    showToast("Note Restored!", "success");
  };

  const deleteArchiveNoteHandler = async (noteId) => {
    const updatedArchiveNote = await deleteArchiveNote(noteId, encodedToken, showToast);
    noteDispatch({ type: "DELETE_ARCHIVE_NOTE", payload: updatedArchiveNote });
    showToast("Archive Note Deleted!", "success");
  };

  const moveArchiveNoteToTrash = (trashNoteData) => {
    noteDispatch({ type: "TRASH_NOTE", payload: trashNoteData });
    archiveNotes.find((archiveNoteData) =>
      archiveNoteData._id === trashNoteData._id
        ? deleteArchiveNoteHandler(archiveNoteData._id)
        : ""
    );
    showToast("Note moved to Trash!", "success");
  };

  return (
    <section className="archive-wrapper flex">
      <Sidebar showBtn={false} />
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
