import React from 'react';

const Hello = () => {
    // with JSX
    return (
        <div> 
            <h2>Hi Ajay - JSX</h2>
        </div>
    )
    // Without JSX
    // return React.createElement('div', null, React.createElement('h2', null, 'Hi Ajay - JSX'));
}

export default Hello;