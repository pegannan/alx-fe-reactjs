import { useState } from 'react';

function Counter (){
    const [count, setCount] = useState(0);
    return
    <div>
    <button style={{backgroundColor: 'gray'}} onClick={() => setCount(count + 1)}>Increment</button>
    <button onClick={() => setCount(count - 1)}>Decrement</button>
    <button onClick={() => setCount(0)}>Reset</button>
    <p>This is the current count: {count}</p>
    </div>
}