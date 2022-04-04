import { useNavigate } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  const navigate = useNavigate();

  const logoutHandler = () => {
    localStorage.clear();
    navigate("/");
    navigate(0);
  };

  return (
    <aside className="sidebar-wrapper flex flexCol flexJustifyBetween p-5">
      <section>
        <ul className="sidebar-lists">
          <li className="sidebar-lists-items">
            <i className="fa fa-house mr-4"></i>
            Home
          </li>
          <li className="sidebar-lists-items">
            <i className="fa fa-tag mr-4"></i>
            Labels
          </li>
          <li className="sidebar-lists-items">
            <i className="fa fa-box-archive mr-4"></i>
            Archive
          </li>
          <li className="sidebar-lists-items">
            <i className="fa fa-trash-can mr-4"></i>
            Trash
          </li>
          <li className="sidebar-lists-items">
            <i className="fa fa-user mr-4"></i>
            Profile
          </li>
        </ul>
        <button type="button" className="btn btn-primary create-btn m-2">
          Create New Note
        </button>
      </section>
      <section className="sidebar-footer flex flexAlignItemsCenter">
        <div className="flex flexAlignItemsCenter">
          <img
            alt="Profile"
            className="responsive-image profile-image"
            src="/assets/profile.png"
          />
          <p>Kuldeep Gupta</p>
        </div>
        <i
          className="fa-solid fa-arrow-right-from-bracket fa-2x"
          onClick={logoutHandler}
        ></i>
      </section>
    </aside>
  );
};

export { Sidebar };
