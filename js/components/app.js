import React from 'react';
import Navbar from  './navbar';


export default function App(props) {
    return (
        <div>
            <Navbar links={props.children} />
            
        </div>
    );
};
