import { Outlet, NavLink } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"
import Badge from "@mui/material/Badge"

import "./Navbar.css"

const icon = <FontAwesomeIcon icon={faCartShopping} />

const Navbar = () => {
  return (
    <div>
      <Outlet />
      <nav className="navbar">
        <ul className="navbar_links">
          <NavLink to="">HOME</NavLink>
          <NavLink to="treatments">TREATMENTS</NavLink>
          <NavLink to="contact">CONTACT</NavLink>
          <NavLink to="shop">SHOP</NavLink>
          <NavLink to="book" className="appointment">
            MAKE AN APPOINTMENT 
          </NavLink>
          <NavLink to="cart" className="cart">
            <Badge badgeContent={1} color="primary">
              <i>{icon}</i>
            </Badge>
          </NavLink>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
