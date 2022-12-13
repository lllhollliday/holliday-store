import React, { useState, useEffect, useContext } from "react"
import { Link } from "react-router-dom"
import "./Product.css"
import axios from "axios"
import { MyContext } from "../context/MyContext"

export default function Product() {
  const { cart, setCart } = useContext(MyContext)
  const addItemIntoCart = (product) => {
    const foundItem = cart.find((item) => item._id === product._id)
    if (foundItem) {
      foundItem.quantity++
      setCart([...cart])
    } else {
      setCart([...cart, { ...product, quantity: 1 }])
    }
  }

  const [data, setData] = useState([])

  useEffect(() => {
    axios({
      method: "GET",
      url: "https://dummyjson.com/products",
    }).then((res) => {
      console.log(res.data)
      setData(res.data.products)
    })
  }, [])

  return (
    <div className="grid_container">
      {data.map((product) => {
        return (
          <div key={product._id}>
            <img src={product.thumbnail} alt="#" width="200" />
            <h3>{product.title}</h3>
            <p>${product.price}</p>
            <button onClick={() => addItemIntoCart(product)}>
              Add To Cart
            </button>
          </div>
        )
      })}
    </div>
  )
}
