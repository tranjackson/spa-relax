import * as React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

//Link tags will work as your anchor tag - defines which route parth to LINK to
// Styled components
const Navbar = styled.nav`
  display: flex; /* Use flexbox for layout */
  justify-content: space-between; /* Space out items */
  align-items: center; /* Vertically center items */
`;

const NavbarBrand = styled(Link)`
  /* Styles for your navbar brand */
  text-decoration: none;
  color: inherit;
  padding-right: 10px;
  padding-left: 10px;
`;

const NavbarIcon = styled.span`
  display: inline-block;
  width: 50px; // The width you want for your icon container
  height: 50px; // The height you want for your icon container
  margin-right: 10px;
  text-decoration: none;
  border: none;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain; // Ensures the image will scale correctly within the span
  }
`;

// Header component

const Header = () => {
  return (
    <header>
      <Navbar className="navbar navbar-expand">
        <div className="container-fluid">
          <NavbarIcon className="navbar-toggler-icon">
            <Link class="navbar-brand" to="/">
              <img src="../assets/icons/lotus.png" alt="lotus logo" />
            </Link>
          </NavbarIcon>
          {/* Use NavbarBrand here */}
          <NavbarBrand to="/">Lotus Spa</NavbarBrand>
          <div className="collapse navbar-collapse">
            <div className="navbar-nav">
              <Link className="nav-link" to="">
                Home
              </Link>
              <Link className="nav-link" to="/packages">
                Packages
              </Link>
              <Link className="nav-link" to="/products">
                Products
              </Link>
              <Link className="nav-link" to="/book">
                Book Appointment
              </Link>
            </div>
          </div>
        </div>
      </Navbar>
    </header>
  );
};

export default Header;
