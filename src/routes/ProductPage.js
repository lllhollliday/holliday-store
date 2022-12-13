import "ProductPage.css"
import Product from "../components/Product"

const ProductPage = ({ data }) => {
  return (
    <div className="productpage">
      <div className="productpage_left">
        <div className="left_img">
          <img src={data.thumbnail} alt="" />
        </div>
        <div className="left_info">
          <p className="left_name">Product 1</p>
          <p>Price</p>
          <p>Descripton</p>
        </div>
      </div>
      <div className="productpage_right">
        <div className="right_info">
          <p>
            price <span>$5311</span>
          </p>
          <p>
            status <span>In stock</span>
          </p>
          <p>
            quantity
            <select value="1">1</select>
            <select value="2">2</select>
            <select value="3">3</select>
            <select value="4">4</select>
          </p>
          <p>
             <button type="button">Add to Cart</button>
          </p>
         
        </div>
      </div>
    </div>
  )
}

export default ProductPage