import { useState,useEffect } from "react";

function CounterExample() {
    const [count, setCount] = useState(0);

    //Similar to componentDidMount and componentDidUpdate
    useEffect(()=>{
        //Update the document title using the browser API
        document.title=`You Clicked ${count} times`;
    })
    return (
        <div style={{margin:'30px',padding:'5px'}}>
            <h3>You click {count} times</h3>
            <button onClick={() => setCount(count + 1)}>
                <b>CLICK</b>
            </button>
        </div>
    );
}
export default CounterExample;