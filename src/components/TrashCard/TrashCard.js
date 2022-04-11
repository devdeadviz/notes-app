import "./TrashCard.css";

const TrashCard = ({ note }) => {
  const { title, body, createdAt } = note;

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
          <i class="fa-solid fa-trash-arrow-up mx-3"></i>
          <i className="fa-solid fa-trash mx-3"></i>
        </div>
      </div>
    </div>
  );
};

export { TrashCard };
