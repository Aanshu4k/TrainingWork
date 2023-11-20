import React from 'react';
class Contact extends React.Component {
    render() {
        return (
            <>
                <h1>Contact Us</h1>
                <form>
                    <label>Name</label>
                    <input type='text' /><br />
                    <label>Query</label><br/>
                    <textarea type='textarea' style={{}}/><br />
                </form>
            </>
        );
    }
}
export default Contact;