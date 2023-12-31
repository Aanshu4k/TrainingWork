import Button from "react-bootstrap/Button";
const Cart = (props) => {
  const removeCart = (id) => {
    const item=props.cart.find(item=>item.id===id);
    if(item.quantity>1){
        --item.quantity;
        props.setCart([...props.cart])
    }
    else{
        const removeItem = props.cart.filter((item) => item.id !== id);
        props.setCart(removeItem);
    }
    console.log(props.cart);
  };

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
    </>
  );
};
export default Cart;
