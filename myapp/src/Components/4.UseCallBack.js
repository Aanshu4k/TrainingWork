import { useState, useCallback } from 'react';
function ChildComponent(props) {
    console.log('Child rendered.');
    return (
        <button onClick={props.onClick}>Click me</button>
    );
}
function ParentComponentUseCallBack() {
    const [count, setCount] = useState(0);
    const handleClick = useCallback(() => {
        setCount((prevCount) => prevCount + 1);
    }, []);
    return (
        <div>
            <ChildComponent onClick={handleClick} />
            <p>Count: {count}</p>
        </div>
    )
}
export default ParentComponentUseCallBack;