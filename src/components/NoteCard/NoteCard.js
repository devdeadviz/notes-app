import "./NoteCard.css";

const NoteCard = ({ note }) => {
  const { title, body, createdAt } = note;

  return (
    <div className="vertical-card-wrapper note-card-wrapper p-2 my-4">
      <div className="vertical-card-header flex flexAlignItemsCenter">
        <h2 className="m-2">{title}</h2>
        <i className="fa-solid fa-thumbtack mx-3"></i>
      </div>
      <div className="vertical-card-body my-4 mx-2">
        <p>{body}</p>
      </div>
      <div className="note-card-footer flex flexAlignItemsCenter">
        <p className="ml-2">Created on: {createdAt}</p>
        <div className="note-card-options">
          <i className="fa-solid fa-pencil mx-3"></i>
          <i className="fa-solid fa-palette mx-3"></i>
          <i className="fa-solid fa-tag mx-3"></i>
          <i className="fa-solid fa-box-archive mx-3"></i>
          <i className="fa-solid fa-trash mx-3"></i>
        </div>
      </div>
    </div>
  );
};

export { NoteCard };
