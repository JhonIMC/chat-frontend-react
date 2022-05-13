import React from "react";
import { Nav, Navbar, Container, Button, NavDropdown } from "react-bootstrap";
import {useLogoutUserMutation} from "../services/appApi";
import { useSelector } from "react-redux";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

function Navigation() {
  const user = useSelector((state) => state.user);
  const [logoutUser] = useLogoutUserMutation();

  async function handleLogout(e) {
    e.preventDefault();
    await logoutUser(user);
    // Redirect to home page
    window.location.replace("/");
  }

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Nav.Link as={Link} to="/">
          <Navbar.Brand>
            <img src={logo} alt="logo" style={{ width: 50, height: 50 }} />
          </Navbar.Brand>
        </Nav.Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {!user && (
              <Nav.Link as={Link} to="/login" style={{fontSize: "20px"}}>
                Login
              </Nav.Link>
            )}
            <Nav.Link as={Link} to="/chat" style={{fontSize: "20px"}}>
              Chat
            </Nav.Link>
            {user && (
              <NavDropdown
              style={{fontSize: "20px"}}
                title={
                  <>
                    <img
                      src={user.picture}
                      style={{
                        width: 30,
                        height: 30,
                        marginRight: 10,
                        objectFit: "cover",
                        borderRadius: "50%"
                      }}
                    />
                    {user.name}
                  </>
                }
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>

                <NavDropdown.Item>
                  <Button variant="danger" onClick={handleLogout}>Logout</Button>
                </NavDropdown.Item>
              </NavDropdown>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
