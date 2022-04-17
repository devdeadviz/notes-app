import { useNote } from "../../contexts";
import "./Filter.css";

const Filter = ({ setShowFilterBox }) => {
  const {
    noteState: { labelsList },
  } = useNote();

  return (
    <div className="filter-modal">
      <div className="filter-modal-content">
        <div className="filter-modal-header">
          <h4 className="filter-modal-title">Sort & Filter</h4>
        </div>
        <div className="filter-modal-body">
          <section className="filter-section">
            <h4 className="filter-modal-title">Filter By Labels:</h4>
            <section>
              {labelsList.map(({ label, id }) => (
                <label className="flex flexAlignItemsCenter m-2" key={id}>
                  <input className="mr-2" type="checkbox" value={label} />
                  {label}
                </label>
              ))}
            </section>
          </section>
          <section className="sort-section">
            <h4 className="filter-modal-title">Sort By Date:</h4>
            <section className="flex flexCol">
              <label className="flex flexAlignItemsCenter m-2">
                <input
                  className="mr-2"
                  type="radio"
                  value="latest"
                  name="sort-by-date"
                />
                Date created: latest
              </label>
              <label className="flex flexAlignItemsCenter m-2">
                <input
                  className="mr-2"
                  type="radio"
                  value="earliest"
                  name="sort-by-date"
                />
                Date created: earliest
              </label>
            </section>
          </section>
        </div>
        <div className="filter-modal-footer">
          <button
            className="btn btn-primary close-filter-btn filter-modal-button m-2"
            onClick={() => setShowFilterBox(false)}
          >
            Close
          </button>
          <button
            className="btn btn-primary clear-filter-btn filter-modal-button m-2"
          >
            Clear Filter
          </button>
        </div>
      </div>
    </div>
  );
};

export { Filter };
