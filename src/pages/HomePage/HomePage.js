import { Sidebar } from "../../components";
import "./HomePage.css";

const HomePage = () => {
  return (
    <section className="homepage-wrapper flex">
      <Sidebar />
      <section className="homepage-main-section flex flexCol flexAlignItemsCenter pt-2">
        <div className="homepage-search-input-wrapper flex flexAlignItemsCenter">
          <i class="fa-solid fa-magnifying-glass"></i>
          <input
            className="homepage-search-input"
            type="text"
            placeholder="Search"
          />
          <i class="fa-solid fa-bars"></i>
        </div>
      </section>
    </section>
  );
};

export { HomePage };
