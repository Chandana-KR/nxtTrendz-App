import CartContext from '../../context/CartContext'
import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      const cartItemsCount = cartList.length
      const totalAmount = cartList.reduce(
        (total, item) => total + item.price * item.quantity,
        0,
      )
      return (
        <div className="cartsummary-container">
          <h1 className="order-total">Order Total : Rs {totalAmount}/-</h1>
          <p className="total-items">{cartItemsCount} Items in cart</p>
          <button type="button" className="checkout-button">
            Checkout
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
