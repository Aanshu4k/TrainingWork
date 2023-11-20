import React from "react";
const Login = () => {
    return (
        <div className="Logindiv">
            <form>
                <label>UserName</label><br/>
                <input type='text' /><br />
                <label>Password</label><br/>
                <input type='text' />
            </form>

        </div>
    );
}
export {Login};