import { v4 as uuid } from "uuid";
import "./ColorPalette.css";

const ColorPalette = ({ getNoteColor }) => {
  const noteColors = [
    {
      id: uuid(),
      color: "#9980cc",
    },
    {
      id: uuid(),
      color: "#187dd8",
    },
    {
      id: uuid(),
      color: "#cfe1b9",
    },
    {
      id: uuid(),
      color: "#00a86b",
    },
    {
      id: uuid(),
      color: "#fbbc04",
    },
    {
      id: uuid(),
      color: "#fff475",
    },
    {
      id: uuid(),
      color: "#a7ffeb",
    },
    {
      id: uuid(),
      color: "#aecbfa",
    },
    {
      id: uuid(),
      color: "#d7aefb",
    },
    {
      id: uuid(),
      color: "#fdcfe8",
    },
  ];

  return (
    <div className="color-palette-wrapper">
      {noteColors.map((noteColor) => (
        <button
          className="color-btn"
          key={noteColor.id}
          onClick={() => getNoteColor(noteColor.color)}
          style={{ backgroundColor: noteColor.color }}
        ></button>
      ))}
    </div>
  );
};

export { ColorPalette };
