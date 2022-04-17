import { Chip } from "../Chips/Chip";
import "./ArchiveCard.css";

const ArchiveCard = ({
  note,
  restoreArchiveNoteHandler,
  moveArchiveNoteToTrash,
}) => {
  const { title, body, createdAt, _id, noteColor, labels } = note;
  return (
    <div
      className="vertical-card-wrapper archive-card-wrapper p-2 my-4"
      style={{ backgroundColor: noteColor }}
    >
      <div className="vertical-card-header flex flexAlignItemsCenter">
        <h2 className="m-2">{title}</h2>
      </div>
      <div className="vertical-card-body my-4 mx-2">
        <p>{body}</p>
      </div>
      {labels && <Chip text={labels} />}
      <div className="archive-card-footer flex flexAlignItemsCenter">
        <p className="archive-card-date ml-2">Archived on: {createdAt}</p>
        <div className="archive-card-options">
          <i
            className="fa-solid fa-box-open mx-3"
            onClick={() => restoreArchiveNoteHandler(_id)}
          ></i>
          <i
            className="fa-solid fa-trash mx-3"
            onClick={() => moveArchiveNoteToTrash(note)}
          ></i>
        </div>
      </div>
    </div>
  );
};

export { ArchiveCard };
