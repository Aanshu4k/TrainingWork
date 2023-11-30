import React, { useState, useEffect, useRef } from "react";
import './UseRef.css';

function Timer() {
    const [count, setCount] = useState(0);
    const countRef = useRef(count);             // eqv. to const count={current:0}
    const timeoutRef = useRef(null);
    useEffect(() => {
        countRef.current = count;
    }, [count]);        //dependency on count so that render this context only when count changes

    function Start() {
        setCount((count) => count + 1);
        timeoutRef.current = setTimeout(Start, 500);
        console.log(timeoutRef)
    }

    const Stop = () => {
        setCount(countRef.current);
        clearTimeout(timeoutRef.current);
    };
    const Reset = () => {
        setCount(countRef.current=0);
        clearTimeout(timeoutRef.current);
        timeoutRef.current = 0;
        console.log(timeoutRef)
    };

    return (
        <div style={{ border: 'solid 10px seagreen',margin:'20px', padding: '30px',borderRadius:'50px',display: 'inline-block' }}>
            <h3><b>TIMER</b></h3>
            <button>{countRef.current}</button><br /><br />
            <button onClick={Start}>START</button>{" "}
            <button onClick={Stop}>STOP</button>{" "}
            <button onClick={Reset}>RESET</button>
        </div>
    );
}

export default Timer;
