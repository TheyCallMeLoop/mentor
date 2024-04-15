import React, { useState } from "react";
// import Button from 'react-bootstrap/Button';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../../assets/logo/Logo.svg";
import apple from "../../assets/icons/apple.svg";
import google from "../../assets/icons/google.svg";
import { useSearchParams } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import { Button } from "react-bootstrap";

const Header = () => {
  let [search, setSearch] = useSearchParams();

  const handladSerchParams =(paramValue) =>{
    const data = { selected: paramValue}
    setSearch(data)
  }

 

  return (
    <>
      <Navbar id="home_nav" expand="lg" className="home_navbar py-lg-0 py-4">
        <Container fluid={"xl"}>
          <Navbar.Brand href="#">
            <img src={Logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="ms-auto me-auto ms-4 my-2 my-lg-0" navbarScroll>
              <Nav.Link onClick={()=> handladSerchParams('serve')}>Who We Serve</Nav.Link>
              <Nav.Link onClick={()=> handladSerchParams('mission')}>Our Mission</Nav.Link>
              <Nav.Link onClick={()=> handladSerchParams('mentor')}>Meet Some of Our Mentors</Nav.Link>
              <Nav.Link onClick={()=> handladSerchParams('faq')}>FAQs</Nav.Link>
            </Nav>
           
            <div className="d-flex mt-3 justify-content-center align-items-center gap-3">
              <button    className="black_btn_play_trans" onClick={()=> handladSerchParams('download')}>
                <img src={apple} alt="" />
                <div>
                  <p className="text_white fs_8 font_semibold ">
                    Download from
                  </p>
                  <p className="text_white fs_12 font_medium ">App Store</p>
                </div>
              </button>
              <button className="black_btn_play_trans" onClick={()=> handladSerchParams('download')}>
                <img src={google} alt="" />
                <div>
                  <p className="text_white fs_8 font_semibold ">
                    Download from
                  </p>
                  <p className="text_white fs_12 font_medium ">Google Play</p>
                </div>
              </button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    
    </>
  );
};
export default Header;
