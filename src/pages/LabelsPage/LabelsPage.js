import { LabelInput, Sidebar } from "../../components";
import { useNote } from "../../contexts";
import "./LabelsPage.css";

const LabelsPage = () => {
  const {
    noteState: { labelsList },
  } = useNote();

  return (
    <section className="labels-page-wrapper flex">
      <Sidebar showBtn={false} />
      <section className="labels-page-main-section flex flexCol flexAlignItemsCenter pt-2">
        <LabelInput />
        <section className="labels-page-list-wrapper my-2">
          {labelsList.map(({ label, id }) => (
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
          ))}
        </section>
      </section>
    </section>
  );
};

export { LabelsPage };
