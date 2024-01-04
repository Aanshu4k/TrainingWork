import Button from "react-bootstrap/Button";
import { toast, Toaster } from "react-hot-toast";
import axios from "axios";

const Cart = (props) => {
  const decrItems = (id) => {
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

  const buyItem = async (id) => {
    const prod = props.cart.find((product) => product.id === id);
    const orderItem = {
      ItemId: prod.id,
      Title: prod.title,
      Price: prod.price,
      Quantity: prod.quantity,
    }
    const res = await axios.post("http://localhost:5089/api/CartItems", orderItem)
    console.log(res.data)
    if (res.data) {
      toast.success(`Item with ID: ${id} booked!`);
    }
  }
  const deleteItem = async (id) => {
    await axios.delete(`http://localhost:5089/api/CartItems/${id}`);
    const updatedCart=props.cart.filter(item=>item.id!==id);
    props.setCart(updatedCart)
    toast.success(`Item with ID: ${id} deleted successfully!`, {
      style: {
        border: '1px solid #713200',
        padding: '16px',
        color: '#713200',
      },
      iconTheme: {
        primary: '#713200',
        secondary: '#FFFAEE',
      },
    });
  }
  return (
    <>
      <div>
        <Toaster position="top-right" reverseOrder={false} />
      </div>
      <h3>Your Cart</h3>
      <br />
      {
        props.cart.map((items) => (
          <div key={items.id} className="Cart">
            <b>{items.title}</b>
            <b>Price: ${items.price * items.quantity}</b>
            <b>
              Quantity:{" "}
              <Button onClick={() => props.addToCart(items.id)}>+</Button>{" "}
              <Button variant="light" disabled={true}>{items.quantity}</Button>{" "}
              <Button onClick={() => decrItems(items.id)}>-</Button>
            </b>
            <Button variant="success" onClick={() => buyItem(items.id)}>
              Buy
            </Button>
            <Button variant="danger" onClick={() => deleteItem(items.id)}>
              Delete
            </Button>
          </div >
        ))}
    </>
  );
};
export default Cart;
