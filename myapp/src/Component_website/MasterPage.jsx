import React from 'react';
import NavBar from './NavBar';
const MasterPage = ({ children }) => {
    return (
        <div>
            <header style={{ backgroundColor: '#f0f0f0', alignItems: 'center',justifyContent:'center' }}>
                <NavBar />
            </header>
            <main>
                
            </main>
            <footer style={{ marginTop: '100%',backgroundColor: '#f0f0f0',padding: '10px'}}>
            <h3>FOOTER</h3>
        </footer>
        </div >
    )
}
export default MasterPage;