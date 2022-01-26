import React from 'react';
import GenerateNewArray from './generateNewArray';
function NavBar(){
    return (
        <div style={{
            backgroundColor: '#f8f9fa',
            borderBottom: '1px solid #dee2e6',
            padding: '0.5rem 1rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: '1.2rem',
            fontWeight: 'bold',
            letterSpacing: '0.1rem',
            textTransform: 'uppercase',
            fontFamily: 'sans-serif'
        }}>
            <GenerateNewArray/>
        </div>
    );
}

export default NavBar;
