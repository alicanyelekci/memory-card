import React from 'react';

export default function Card(props) {
    return (
        <div
            className="card"
            onClick={() => {
                props.onClick(props.id);
            }}
        >
            <img src={props.image} />
            <p>{props.name}</p>
        </div>
    );
}
