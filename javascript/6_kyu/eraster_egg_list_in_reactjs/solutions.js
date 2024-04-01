import React from 'react';

export const EggList = ({eggs}) => (
    <ul>
        {eggs.map((egg, i) => (
            <EasterEgg key={i} name={egg}/>
        ))}
    </ul>
);

export const EasterEgg = ({name}) => (
    <li>{name}</li>
);