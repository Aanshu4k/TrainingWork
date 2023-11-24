import React from 'react';
const MasterPage = ({ children }) => {
    return (
        <div>
            <header style={{ backgroundColor: '#f0f0f0', alignItems: 'center',justifyContent:'center' }}>
                <h1>TRAINING WORK</h1>
            </header>
            <main>
                {/* The main component of each page will be rendered here and children is a keyword */}
                {children}
            </main>
            <footer style={{ marginTop: '100%',backgroundColor: '#f0f0f0',padding: '10px'}}>
            <h3>FOOTER</h3>
        </footer>
        </div >
    )
}
export default MasterPage;