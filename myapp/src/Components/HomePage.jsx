import React from "react";
// import { useNavigate } from "react-router-dom";
const HomePage = () => {
    // const navigate=useNavigate();
    // const goToAbout=(userId)=>{
    //     navigate(`/about/${userId}`);
    //     console.log(userId)
    // }
    return (
        <div>
            <h1>Home Page</h1>
            <p>Welcome to the HomePage!</p>
            {/* <button onClick={()=>goToAbout(1)}>Go to About User 1</button>
            <button onClick={()=>goToAbout(2)}>Go to About User 2</button> */}
        </div>
    )
}
export default HomePage;