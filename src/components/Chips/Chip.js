import "./Chip.css";

const Chip = ({ text }) => {
  return (
    <div class="chip-wrapper">
      <p>{text}</p>
    </div>
  );
};

export { Chip };
