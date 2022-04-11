import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts";
import "./Sidebar.css";

const Sidebar = ({ setShowNoteForm }) => {
  const {
    state: { user },
  } = useAuth();

  const navigate = useNavigate();

  const logoutHandler = () => {
    localStorage.clear();
    navigate(0);
  };

  const getActiveStyle = ({ isActive }) => ({
    textDecoration: "none",
    color: "#000",
    fontWeight: isActive ? 900 : "",
  });

  return (
    <aside className="sidebar-wrapper flex flexCol flexJustifyBetween p-5">
      <section>
        <ul className="sidebar-lists">
          <li className="sidebar-lists-items">
            <NavLink style={getActiveStyle} to="/home">
              <i className="fa fa-house mr-4"></i>
              Home
            </NavLink>
          </li>
          <li className="sidebar-lists-items">
            <NavLink style={getActiveStyle} to="/labels">
              <i className="fa fa-tag mr-4"></i>
              Labels
            </NavLink>
          </li>
          <li className="sidebar-lists-items">
            <NavLink style={getActiveStyle} to="/archive">
              <i className="fa fa-box-archive mr-4"></i>
              Archive
            </NavLink>
          </li>
          <li className="sidebar-lists-items">
            <NavLink style={getActiveStyle} to="/trash">
              <i className="fa fa-trash-can mr-4"></i>
              Trash
            </NavLink>
          </li>
          <li className="sidebar-lists-items">
            <NavLink style={getActiveStyle} to="/profile">
              <i className="fa fa-user mr-4"></i>
              Profile
            </NavLink>
          </li>
        </ul>
        <button
          type="button"
          className="btn btn-primary create-btn m-2"
          onClick={() => setShowNoteForm(true)}
        >
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
          <p>{user.firstName + " " + user.lastName}</p>
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
