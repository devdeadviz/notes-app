import "./NoteCard.css";

const NoteCard = ({ title, body }) => {
  return (
    <div class="vertical-card-wrapper note-card-wrapper p-2">
      <div class="vertical-card-header flex flexAlignItemsCenter">
        <h2 class="m-2">{title}</h2>
        <i class="fa-solid fa-thumbtack mx-3"></i>
      </div>
      <div class="vertical-card-body my-4 mx-2">
        <p>{body}</p>
      </div>
      <div className="note-card-footer flex flexAlignItemsCenter">
        <p className="ml-2">timestamp</p>
        <div className="note-card-options">
          <i class="fa-solid fa-pencil mx-3"></i>
          <i class="fa-solid fa-palette mx-3"></i>
          <i class="fa-solid fa-tag mx-3"></i>
          <i class="fa-solid fa-box-archive mx-3"></i>
          <i class="fa-solid fa-trash mx-3"></i>
        </div>
      </div>
    </div>
  );
};

export { NoteCard };
