import './Cart.css';
import Card from "react-bootstrap/Card";
const Cart = (props) => {
  return (
    <>
      <div>
        <h3>CART</h3>
      </div>
      <div className="cart-container">
        {props.cartItems.map((items) => (
        <Card>
 <p>{items.title}</p>
        </Card>
           
        ))}
      </div>
    </>
  );
};
export default Cart;
