import Button from "react-bootstrap/Button";
import axios from "axios";
const Cart = (props) => {
  const removeCart = (id) => {
    const item = props.cart.find(item => item.id === id);
    if (item.quantity > 1) {
      --item.quantity;
      props.setCart([...props.cart])
    }
    else {
      const removeItem = props.cart.filter((item) => item.id !== id);
      props.setCart(removeItem);
    }
    console.log(props.cart);
  };
  const placeOrder = async (cart) => {
    const orderItems = cart.map(item =>({
      title:item.title,
      price:item.quantity,
      quantity: item.quantity,
    }));
    console.log("Ordered items : ", orderItems)
    try {
      const response = await axios.post("http://localhost:5089/api/CartItems", orderItems);
      console.log(response.data);
      alert("Order Placed successfully!");
    }
    catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.error("Server responded with an error:", error.response.status);
        console.error("Error data:", error.response.data);
      } else if (error.request) {
        // The request was made but no response was received
        console.error("No response received from the server:", error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error("Error setting up the request:", error.message);
      }
    }
  }
  return (
    <>
      <h3>Your Cart</h3>
      <br />
      {
        props.cart.map((items) => (
          <div key={items.id} className="Cart">
            <p>{items.title}</p>
            <p>Price: ${items.price}</p>
            <p>
              Quantity:{" "}
              <Button onClick={() => props.addToCart(items.id)}>+</Button>{" "}
              <Button variant="light" disabled={true}>{items.quantity}</Button>{" "}
              <Button onClick={() => removeCart(items.id)}>-</Button>
            </p>
            <Button variant="danger" onClick={() => removeCart(items.id)}>
              Remove
            </Button>
          </div>
        ))}
      <Button onClick={() => placeOrder(props.cart)}>Place Order</Button>
    </>
  );
};
export default Cart;
