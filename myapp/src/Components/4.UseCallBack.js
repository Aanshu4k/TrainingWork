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
        setCount(() => count + 1);
    }, [count]);
    return (
        <div>
            <ChildComponent onClick={handleClick} />
            <p>Count: {count}</p>
        </div>
    )
}
export default ParentComponentUseCallBack;