import { useState } from "react";
import "./Label.css";

const Label = () => {
  const [labelInput, setLabelInput] = useState("");
  const [labelList, setLabelList] = useState([]);

  const labelListHandler = () => {
    setLabelList((labelListData) => [...labelListData, labelInput]);
    setLabelInput("");
  };

  return (
    <div className="label-wrapper flex flexCol">
      <section className="flex flexAlignItemsCenter flexJustifyCenter">
        <input
          className="label-input"
          type="text"
          placeholder="Enter Custom Label...."
          value={labelInput}
          onChange={(e) => setLabelInput(e.target.value)}
        />
        <i
          className="fa-solid fa-circle-plus mx-2"
          onClick={labelListHandler}
        ></i>
      </section>
      <section className="flex flexCol m-1">
        {labelList.map((label) => (
          <label
            className="label-item flex flexAlignItemsCenter m-1"
            key={`${label}-key`}
          >
            <input className="mr-2" type="checkbox" value={label} />
            {label}
          </label>
        ))}
      </section>
    </div>
  );
};

export { Label };
