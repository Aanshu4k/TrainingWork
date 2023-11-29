import { useMemo, useState } from "react";
function ExpensiveComputation(number){
    
    let result=0;
    for(let i=0;i<10;i++){
        result+=number;
    }
    console.log('Running Expensive Computation...');
    return result;
   
}
function ComplexComponent() {
    const [number,setNumber] = useState(0);
    const [increment,setIncrement]=useState(0);
    const computedValue= useMemo(()=>ExpensiveComputation(number),[number])// it only calls the function when number changes 
    return (
        <div>
            <h1>Result of Expensive Computation : {computedValue}</h1>
            <button onClick={()=>setNumber(number+1)}>Increase Number</button>
            <button onClick={()=>setIncrement(increment+1)}>{increment}</button>
        </div>
    );
}
export default ComplexComponent;