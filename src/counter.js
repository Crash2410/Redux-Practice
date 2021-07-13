import React from 'react';

const Counter = ({ counter, inc, dec, rnd }) => {
    return (
        <div class="jumbotron">
            <h2 id="counter">{counter}</h2>
            <button
                onClick={dec}
                className="btn btn-primary btn-lg">DEC</button>
            <button
                onClick={inc}
                className="btn btn-primary btn-lg">INC</button>
            <button
                onClick={() => {
                    const value = Math.floor(Math.random() * 10);
                    rnd(value);
                }}
                className="btn btn-primary btn-lg">RND</button>
        </div>
    );
};

export default Counter;

