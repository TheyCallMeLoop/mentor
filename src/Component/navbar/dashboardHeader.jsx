import React from 'react'
// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav'; 
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../../assets/logo/Logo.svg'
import { useLocation, useNavigate } from 'react-router-dom';
const DashboardHeader = () => {
  const location = useLocation();
  const login = localStorage.getItem('login_crypto');
  console.log(typeof login)
  return (
    <>
     <></>
    </>
  )
}
export default DashboardHeader
