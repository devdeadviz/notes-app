import "./ArchiveCard.css";

const ArchiveCard = ({ note }) => {
  const { title, body, createdAt } = note;
  return (
    <div className="vertical-card-wrapper archive-card-wrapper p-2 my-4">
      <div className="vertical-card-header flex flexAlignItemsCenter">
        <h2 className="m-2">{title}</h2>
      </div>
      <div className="vertical-card-body my-4 mx-2">
        <p>{body}</p>
      </div>
      <div className="archive-card-footer flex flexAlignItemsCenter">
        <p className="archive-card-date ml-2">Archived on: {createdAt}</p>
        <div className="archive-card-options">
          <i className="fa-solid fa-box-open mx-3"></i>
          <i className="fa-solid fa-trash mx-3"></i>
        </div>
      </div>
    </div>
  );
};

export { ArchiveCard };
