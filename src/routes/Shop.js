import "./Shop.css"
import axios from "axios"
import Product from "../components/Product"

export default function Shop() {
  return (
    <div className="shop-page">
      <h1 className="shop-page-title">Our products</h1>
      <div className="shop-page-products">
        <Product/>
      </div>
    </div>
  )
}
