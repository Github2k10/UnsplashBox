import { Link } from "react-router-dom";

import "./header.scss";

function Header() {
  return (
    <>
      <header className="header col-12">
        <div className="mx-5 my-3">
          <nav className="d-flex align-items-center justify-content-between">
            <div className="col-6">
              <Link className="navbar-brand" to="/">
                <img src="src/assets/img/Logo.svg" alt="unsplashBox logo" />
              </Link>
            </div>
            <div className="col-6 d-flex justify-content-end gap-2">
              <Link to="/">
                <button className="btn active px-4 fs-14">Home</button>
              </Link>
              <Link to="/">
                <button className="btn fs-14">Collections</button>
              </Link>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
