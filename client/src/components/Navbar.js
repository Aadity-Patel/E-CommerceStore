import React from 'react'
import { Container, Nav, Navbar as NavbarBs } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <NavbarBs className = "bg-white shadow-sm mb-3">
        <Container>
            <Nav.Link to = "/" as = {NavLink}>
                Home
            </Nav.Link>
        </Container>
    </NavbarBs>
  )
}
