import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';


function NavbarHeader() {
  const navigate=useNavigate()
  
  const handleLogout=()=>{
    navigate('/')
  }
  return (
    <Navbar expand="lg" className="bg-body-tertiary navbar-fullwidth">
    <Container fluid> {/* Set the Container to fluid */}
    
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link className='category-link' href='./FormPage'>Category</Nav.Link>
          <Nav.Link className='client-link' href='./Newapi'>Client</Nav.Link>
          <Nav.Link className='k1' href='/'> LogOut</Nav.Link>

        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);
}

export default NavbarHeader;