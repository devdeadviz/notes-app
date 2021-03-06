import { Chip } from "../Chips/Chip";
import "./NoteCard.css";

const NoteCard = ({
  note,
  editNoteHandler,
  moveNoteToTrash,
  archiveNoteHandler,
}) => {
  const { title, body, createdAt, noteColor, labels } = note;

  return (
    <div
      className="vertical-card-wrapper note-card-wrapper p-2 my-4"
      style={{ backgroundColor: noteColor }}
    >
      <div className="vertical-card-header flex flexAlignItemsCenter">
        <h2 className="m-2">{title}</h2>
        <i className="fa-solid fa-thumbtack mx-3"></i>
      </div>
      <div className="vertical-card-body my-4 mx-2">
        <p>{body}</p>
      </div>
      {labels && <Chip text={labels} />}
      <div className="note-card-footer flex flexAlignItemsCenter">
        <p className="note-card-date ml-2">Created on: {createdAt}</p>
        <div className="note-card-options">
          <i
            className="fa-solid fa-pencil mx-3"
            onClick={() => editNoteHandler({ ...note, _id: note._id })}
          ></i>
          <i
            className="fa-solid fa-box-archive mx-3"
            onClick={() => archiveNoteHandler(note)}
          ></i>
          <i
            className="fa-solid fa-trash mx-3"
            onClick={() => moveNoteToTrash(note)}
          ></i>
        </div>
      </div>
    </div>
  );
};

export { NoteCard };
