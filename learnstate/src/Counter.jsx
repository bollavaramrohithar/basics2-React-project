import React, {useState} from 'react'
export default function Counter() {
   const [count, setcount] = useState(0);
   const increase = ()=> setcount(count+1);
   const decrease = () =>setcount(count-1);
   const reset=() => setcount(0)

   
    return (
        <div>
            <h3>{count}</h3>
            <button onClick = {increase}>+</button>
            <button onClick = {decrease}>-</button>
            <br></br><br></br>
            <button onClick = {reset}>Reset</button>
              </div>
    )
}