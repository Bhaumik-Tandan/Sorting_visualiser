import React, { useState } from 'react';
import Context from './context';

const Provider = ({ children }) => {
    const [arr, setArr] = useState([]);

    return (
        <Context.Provider
            value={{ arr, setArr }}
        >
            {children}
        </Context.Provider>
    );
};

export default Provider;