import { useNote } from "../../contexts";
import { getFormattedDate } from "../../utils";
import { ColorPalette } from "../ColorPalette/ColorPalette";
import { useState } from "react";
import "./NoteForm.css";
import { Label } from "../LabelInput/Label";

const NoteForm = ({
  note,
  setNote,
  addNoteHandler,
  updateNoteHandler,
  setShowNoteForm,
}) => {
  const {
    noteState: { editedNotes },
  } = useNote();

  const [showColorPalette, setShowColorPalette] = useState(false);

  const [showLabel, setShowLabel] = useState(false);

  const {
    noteState: { noteColor },
    noteDispatch,
  } = useNote();

  const getNoteColor = (color) => {
    noteDispatch({ type: "NOTE_COLOR", payload: color });
  };

  return (
    <>
      <form
        className="note-form-wrapper my-4"
        onSubmit={
          editedNotes
            ? (e) =>
                updateNoteHandler(e, {
                  ...note,
                  createdAt: getFormattedDate(),
                  noteColor,
                })
            : (e) =>
                addNoteHandler(e, {
                  ...note,
                  createdAt: getFormattedDate(),
                  noteColor,
                })
        }
        style={{ backgroundColor: noteColor }}
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
            {editedNotes ? "Save Note" : "Add Note"}
          </button>
          <button
            type="button"
            className="btn btn-outline-secondary cancel-note-btn m-2"
            onClick={() => setShowNoteForm(false)}
          >
            Cancel
          </button>
          <div className="note-form-options">
            <i
              className="fa-solid fa-palette mx-3"
              onClick={() => setShowColorPalette((prev) => !prev)}
            ></i>
            <i
              className="fa-solid fa-tag mx-3"
              onClick={() => setShowLabel((prev) => !prev)}
            ></i>
          </div>
        </div>
      </form>
      {showColorPalette && <ColorPalette getNoteColor={getNoteColor} />}
      {showLabel && <Label />}
    </>
  );
};

export { NoteForm };
