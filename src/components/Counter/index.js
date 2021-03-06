import React, {useState} from "react";

const Counter = () => {
    const [count, setCount] = useState(0);
    const increment         = () => {
        setCount(count + 1);
    }
    const decrement         = () => {
        setCount(count - 1);
    }
    return (
        <div>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <p>Counting: {count}</p>
        </div>
    );
}

export default Counter;