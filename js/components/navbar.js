import React from 'react';

export default function Navbar(props) {
    return (
        <nav> Nav Starts Here<br />
            <span>
                Logo
            </span>
            <div> nav links go here
                {props.children}
            </div>
            Nav ends here
        </nav>

    );
};
