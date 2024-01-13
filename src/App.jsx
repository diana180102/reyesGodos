import { useState } from 'react'
import './App.css'
import Reyes from './components/Reyes.jsx'


function App() {
  
  const [total, setTotal] = useState(0);
    

  return (
    <> 
       <h2 >
         Total a pagar: {total}
       </h2>
      <Reyes setTotal={setTotal}/>
       
    </>
  )
}

export default App
 