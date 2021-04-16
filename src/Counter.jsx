import { useState } from 'react';

export default function Counter() {
    const [count, setCount] = useState(0);

    const handleClick = (e) => {
        e.preventDefault();
        setCount((state) => state + 1);
    };

    const handleContextClick = (e) => {
        e.preventDefault();
        setCount((state) => state - 1);       
    };

    return (
        <>
            <h1>{count}</h1>
            <button onClick={handleClick} onContextMenu={handleContextClick}>somar | subtrair</button>
        </>
    )
}