import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


  
const Header = () => {


//   const [kkk,setkkk]=useState(users);
//   console.log(typeof kkk);
//   console.log(kkk[0])
//   // console.log(users.map(e => e));
//   const [search,setFilter]=useState('');
//  useEffect(()=>{
  // const result=data.fliter((city) =>
  //   city.name.toLowerCase().includes(search));
  //   console.log(result)
 //[]);



// const filertedData=(e)=>{
//   setFilter(e.target.value)
//   console.log(e.target.value);
 
// }

  
  //Function for multiple search filter
   
  
  //Handling the input on our search bar
  
  return (
    <div className='container'>
      <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/user">Robots</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/user">Home</Nav.Link>
            <Nav.Link href="/userlist">About</Nav.Link>
            <Nav.Link href="#action2">Service</Nav.Link>
            <Nav.Link href="#action2">Contect us</Nav.Link>
           
           
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              
              // value={search} onChange={filertedData}
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar> 
    </div>
  )
}

export default Header
