import { useNote, useSortFilter } from "../../contexts";
import "./Filter.css";

const Filter = ({ setShowFilterBox }) => {
  const {
    noteState: { labelsList },
  } = useNote();

  const { sortFilterDispatch } = useSortFilter();

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
                  <input
                    className="mr-2"
                    type="radio"
                    name="filter-by-labels"
                    value={label}
                    onChange={() =>
                      sortFilterDispatch({
                        type: "FILTER_BY_LABELS",
                        payload: label,
                      })
                    }
                  />
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
                  onChange={() =>
                    sortFilterDispatch({
                      type: "SORT_BY_DATE",
                      payload: "LATEST",
                    })
                  }
                />
                Date created: latest
              </label>
              <label className="flex flexAlignItemsCenter m-2">
                <input
                  className="mr-2"
                  type="radio"
                  value="oldest"
                  name="sort-by-date"
                  onChange={() =>
                    sortFilterDispatch({
                      type: "SORT_BY_DATE",
                      payload: "OLDEST",
                    })
                  }
                />
                Date created: oldest
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
            onClick={() => sortFilterDispatch({ type: "CLEAR_ALL" })}
          >
            Clear Filter
          </button>
        </div>
      </div>
    </div>
  );
};

export { Filter };
