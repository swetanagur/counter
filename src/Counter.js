import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount((prev) => prev + 1);
    }
    const handleDecrement = () => {
        setCount((prev) => (prev > 0 ? prev - 1 : 0));
    }
    const handleReset = () => {
        setCount(0);
    }
    
    return (
        <div>
            <div className='count'>{count}</div>
            <button onClick={handleIncrement}>+</button>
            <button onClick={handleDecrement} disabled={count === 0}>-</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    )
}

export default Counter