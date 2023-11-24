import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <br/>
            <i>Ques1. Create a functional component that uses the useState hook to maintain a counter. Display the counter value on the screen, and add buttons to increment and decrement the counter. </i>
            <h2>Counter: {count}</h2>
            <button onClick={() => setCount(count + 1)}><b>INCREMENT</b></button>{" "}
            <button onClick={() => setCount(count - 1)}><b>DECREMENT</b></button>
        </div>
    );
}
export default Counter;