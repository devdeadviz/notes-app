import { LabelInput, Sidebar } from "../../components";
import { useNote } from "../../contexts";
import "./LabelsPage.css";

const LabelsPage = () => {
  const {
    noteState: { labelsList },
    noteDispatch,
  } = useNote();

  const deleteLabelHandler = (labelId) => {
    const updatedLabelsList = labelsList.filter(
      (labels) => labels.id !== labelId
    );
    noteDispatch({
      type: "DELETE_LABEL_FROM_LIST",
      payload: updatedLabelsList,
    });
  };

  return (
    <section className="labels-page-wrapper flex">
      <Sidebar showBtn={false} />
      <section className="labels-page-main-section flex flexCol flexAlignItemsCenter pt-2">
        <LabelInput />
        <section className="labels-page-list-wrapper my-2">
          {labelsList.map(({ label, id }) => (
            <div className="flex flexAlignItemsCenter flexJustifyBetween">
              <label
                className="label-item flex flexAlignItemsCenter m-4"
                key={id}
              >
                <input
                  className="mr-2"
                  type="radio"
                  name="labels"
                  value={label}
                />
                {label}
              </label>
              <i
                className="fa-solid fa-trash mx-3"
                onClick={() => deleteLabelHandler(id)}
              ></i>
            </div>
          ))}
        </section>
      </section>
    </section>
  );
};

export { LabelsPage };
