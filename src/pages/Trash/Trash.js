import { Sidebar } from "../../components";
import "./Trash.css";

const Trash = () => {
  return (
    <section className="trash-wrapper flex">
      <Sidebar />
      <section className="trash-main-section flex flexCol flexAlignItemsCenter pt-2">
        Trash Page
      </section>
    </section>
  );
};

export { Trash };
