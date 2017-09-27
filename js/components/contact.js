// js/components/contact.js
import React from 'react';

import {Link} from 'react-router';

export default function Contact(props) {
    return (
        <div>
            <nav> 
                <Link to={'/contacts/' + props.id}>
                    {props.name}
                </Link>
            </nav>
            <main>
            <h1>Content from props: {props.phoneNumber}</h1>
            </main>
        </div>
    );
};


