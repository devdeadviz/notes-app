import { useState } from "react";
import { useNote } from "../../contexts";
import { v4 as uuid } from "uuid";
import "./LabelInput.css";

const LabelInput = () => {
  const [labelInput, setLabelInput] = useState("");

  const { noteDispatch } = useNote();

  const labelListHandler = () => {
    noteDispatch({
      type: "ADD_LABELS_TO_LIST",
      payload: { label: labelInput, id: uuid() },
    });
    setLabelInput("");
  };

  return (
    <div className="label-wrapper flex flexAlignItemsCenter">
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
    </div>
  );
};

export { LabelInput };
