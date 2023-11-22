import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);
    return (
        <div style={{margin:'30px',padding:'5px'}}>
            <h3>You click {count} times</h3>
            <button onClick={() => setCount(count + 1)} style={{
                backgroundColor: 'dodgerblue', height: '40px',
                borderRadius: '30px', boxShadow:'5 5 100px grey'
            }}>
                <b>CLICK</b>
            </button>
        </div>
    );
}
export default Counter;