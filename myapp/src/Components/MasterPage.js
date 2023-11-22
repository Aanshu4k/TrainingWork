import React from 'react';
const MasterPage = ({ children }) => {
    return (
        <div>
            <header style={{backgroundColor:'#ddd',alignItems:'center'}}>
                <h1>-------------------------HEADER----------------------------</h1>
            </header>
            <main>
                {/* The main component of each page will be rendered here and children is a keyword */}
                {children}
            </main>
            <footer style={{backgroundColor:'#ddd'}}>
                <h3>------------------------FOOTER-------------------------------</h3>
            </footer>
        </div>
    )
}
export default MasterPage;