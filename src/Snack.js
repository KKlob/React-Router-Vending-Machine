import React from 'react';
import { Link } from 'react-router-dom';

const Snack = ({ snack }) => {

    return (
        <div>
            <h3>{snack.name}</h3>
            <img src={snack.img} alt={snack.desc} />
            <h5>{snack.cost}</h5>
            <p>{snack.desc}</p>
            <Link to="/">Go Back</Link>
        </div>
    )
}

export default Snack;