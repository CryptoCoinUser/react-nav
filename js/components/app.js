import React from 'react';

export default function App(props) {
    return (
        <div>
            <nav>
                <span>
                    Logo
                </span>
                <div> nav links go here
                    {props.children}
                    end nav links
                </div>
            </nav>
            <main>
                other components go here
            </main>
        </div>
    );
};
