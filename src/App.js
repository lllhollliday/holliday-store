import "./App.css"
//Front-End
import { NavLink, Outlet, Route, Routes } from "react-router-dom"
import Home from "./routes/Home"
import Book from "./routes/Book"
import Treatments from "./routes/Treatments"
import Contact from "./routes/Contact"
import Shop from "./routes/Shop"
import Cart from "./components/Cart"
import Navbar from "./components/Navbar"

/* import { useContext } from "react"
import { MyContext } from "./context/MyContext"
import { Badge } from "@mui/material"
import { MailIcon } from "@mui/icons-material" */

function App(sideToggle) {
  /*   const {cart} = useContext(MyContext) */
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book" element={<Book />} />
        <Route path="/treatments" element={<Treatments />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  )
}

export default App
