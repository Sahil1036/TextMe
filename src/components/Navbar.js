import { NavLink } from "react-router-dom";

export default function ({ NavbarName, AboutName, Theme, Toggle, showMess }) {
  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary"
      data-bs-theme={Theme}
    >
      <div className="container-fluid">
        <NavLink
          className="navbar-brand"
          to="/TextMe"
          style={{ cursor: "pointer" }}
          onClick={() => {
            showMess("Home Section is Opened");
          }}
        >
          {NavbarName}
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                className="nav-link active"
                aria-current="page"
                to="/TextMe"
                style={{ cursor: "pointer" }}
                onClick={() => {
                  showMess("Home Section is Opened");
                }}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/about"
                style={{ cursor: "pointer" }}
                onClick={() => {
                  showMess("About Section is Opened");
                }}
              >
                {AboutName}
              </NavLink>
            </li>
          </ul>
          <div className="form-check form-switch" onClick={Toggle}>
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />
            <label
              className="form-check-label"
              htmlfor="flexSwitchCheckDefault"
            >
              {Theme==="primary"?"light":Theme} Mode
            </label>
          </div>
          {/* <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-primary" type="submit">Search</button>
          </form> */}
        </div>
      </div>
    </nav>
  );
}
