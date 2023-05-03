import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
      <div className="container-fluid">
        <NavLink to={'/'} className="navbar-brand">
          Films
        </NavLink>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink to={'/'} className="nav-link">
              Home
            </NavLink>
            <NavLink to={'movies'} className="nav-link">
              Movies
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
