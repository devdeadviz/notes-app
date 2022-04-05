import { getFormattedDate } from "../../utils";
import "./NoteForm.css";

const NoteForm = ({ note, setNote, addNoteHandler }) => {
  return (
    <>
      <form
        className="note-form-wrapper my-4"
        onSubmit={(e) =>
          addNoteHandler(e, { ...note, createdAt: getFormattedDate() })
        }
      >
        <div className="flex flexAlignItemsCenter">
          <textarea
            className="note-form-title"
            placeholder="Title"
            required
            value={note.title}
            onChange={(e) => setNote({ ...note, title: e.target.value })}
          />
          <i className="fa-solid fa-thumbtack mx-3"></i>
        </div>
        <textarea
          className="note-form-body"
          placeholder="Take a note..."
          required
          value={note.body}
          onChange={(e) => setNote({ ...note, body: e.target.value })}
        />
        <div className="flex flexAlignItemsCenter">
          <button
            type="submit"
            className="btn btn-outline-primary add-note-btn m-2"
          >
            Add Note
          </button>
          <div className="note-form-options">
            <i className="fa-solid fa-palette mx-3"></i>
            <i className="fa-solid fa-tag mx-3"></i>
            <i className="fa-solid fa-box-archive mx-3"></i>
            <i className="fa-solid fa-trash mx-3"></i>
          </div>
        </div>
      </form>
    </>
  );
};

export { NoteForm };
