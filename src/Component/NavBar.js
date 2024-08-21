  import Container from 'react-bootstrap/Container';
  import Nav from 'react-bootstrap/Nav';
  import Navbar from 'react-bootstrap/Navbar';
  import NavDropdown from 'react-bootstrap/NavDropdown';
  import { BrowserRouter, NavLink, Route,Link } from 'react-router-dom';
  function NavBar() {
    return (
      <>
    <Navbar bg="primary" data-bs-theme="dark">
      
        <Container>
        <h1 id='logo'>Health</h1>
          <Nav className="me-auto" id="navbar">
            <NavLink style={{textDecoration:'none' ,fontSize:'20px' ,color:'white' ,marginRight:'50%'}} to="/" >Home</NavLink>
            <NavLink style={{textDecoration:'none',fontSize:'20px',color:'white',marginRight:'50%'}} to="/about">About</NavLink>
            <NavLink  style={{textDecoration:'none',fontSize:'20px',color:'white',marginRight:'50%'}}to="/services" >Services</NavLink>
            <NavLink style={{textDecoration:'none',fontSize:'20px',color:'white',marginRight:'50%'}} to="/departments" >Departments</NavLink>
            <NavLink style={{textDecoration:'none',fontSize:'20px',color:'white',marginRight:'50%'}} to="/contact" >Contact</NavLink>
            </Nav>
        </Container> 
    
      </Navbar>
      
      </>

    );
  }

  export default NavBar;