import React, { useState } from 'react'
import Counter from './Counter'
function App() {
  
   const [name, setname] = useState('Vishnu')
    const handleclick = ()=>{
      setname('Rohitha');
    }
    return (
      <>
        <div>
        <h1>Hello {name}</h1>
        <button onClick ={handleclick}>Click</button>
        </div><br></br>
        <div>
         <Counter />
        </div>
</>
    )
    

    }
    export default App;
  

