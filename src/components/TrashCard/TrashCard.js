import "./TrashCard.css";

const TrashCard = ({
  note,
  deleteNoteFromTrashHandler,
  restoreTrashNoteHandler,
}) => {
  const { title, body, createdAt, _id } = note;

  return (
    <div className="vertical-card-wrapper trash-card-wrapper p-2 my-4">
      <div className="vertical-card-header flex flexAlignItemsCenter">
        <h2 className="m-2">{title}</h2>
        <i className="fa-solid fa-thumbtack mx-3"></i>
      </div>
      <div className="vertical-card-body my-4 mx-2">
        <p>{body}</p>
      </div>
      <div className="trash-card-footer flex flexAlignItemsCenter">
        <p className="trash-card-date ml-2">Deleted on: {createdAt}</p>
        <div className="trash-card-options">
          <i
            className="fa-solid fa-trash-arrow-up mx-3"
            onClick={() => restoreTrashNoteHandler(note)}
          ></i>
          <i
            className="fa-solid fa-trash mx-3"
            onClick={() => deleteNoteFromTrashHandler(_id)}
          ></i>
        </div>
      </div>
    </div>
  );
};

export { TrashCard };
