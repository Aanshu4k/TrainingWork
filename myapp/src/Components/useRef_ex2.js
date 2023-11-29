import React,{useRef,useEffect} from 'react';
const UseRefex2 = ({ value }) => {
    const ValueRef = useRef();
  
    useEffect(() => {
      ValueRef.current = value;
    }, [value]);
  
    return (
      <div>
        <p>Current Value: {value}</p>
        <p>Previous Value: {ValueRef.current}</p>
      </div>
    );
  };
export default UseRefex2;