import "./Chip.css";

const Chip = ({ text }) => {
  return (
    <div className="chip-wrapper">
      <p>{text}</p>
    </div>
  );
};

export { Chip };
