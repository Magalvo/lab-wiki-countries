import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-dark bg-primary mb-3">
        <nav className="Navbar">
          <div className="container">
            <NavLink to="/">
              <p className="navbar-brand">Lab WikiCountries</p>
            </NavLink>
          </div>
        </nav>
      </nav>
    </>
  );
};

export default NavBar;
