import { useState, useMemo, useCallback, useEffect } from "react";

const Factorial = () => {
    const [num, setNumber] = useState(0);
    var [factorial, setFactorial] = useState(null);
    useEffect(()=>{
        
    })
    const handleInputChange = (e) => {
        setNumber(e.target.value);
    }
    function calculateFactorial(num) {
        let result = 1;
        for (let i = 1; i <= num; i++) {
            result *= i;
        }
        return (result);
    };
    const result = useMemo(() => calculateFactorial(num), [num])
    const handleClick=useCallback(()=>{
        setFactorial(factorial=result)
    },[])
    return (
        <>
            <br />
            <i>Ques4.Create a functional component that calculates and displays the factorial of a number entered by the user. Use the useMemo hook to optimize the factorial calculation and the useCallback hook to memoize event handlers.</i>
            <br /><label>Enter a number : </label><br />
            <input type='number' value={num} onChange={handleInputChange} />
            <button onClick={handleClick}>Calculate</button>
            <h3>Factorial = {factorial}</h3>
        </>
    )
}
export default Factorial;