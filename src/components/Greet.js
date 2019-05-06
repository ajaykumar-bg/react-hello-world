import React from 'react';

const Greet = ({name, heroName}) => {
    return (
        <div>
            <h2>Hello {name} a.k.a {heroName}</h2>
        </div>
    );

}


export default Greet;