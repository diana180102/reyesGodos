import Card from "./Card";
import '../css/card.css'
import { useState } from "react";



function Reyes({setTotal}) {
    
  
      
    const reyes=[
    {
      nombre:"Atanagildo",
      color:"darkolivegreen",
      precio:178
    },{
      nombre:"Ervigio",
      color:"crimson",
      precio:169
    },{
      nombre:"Ataúlfo",
      color:"peru",
      precio:81
    },{
      nombre:"Leogivildo",
      color:"darkmagenta",
      precio:126
    },{
      nombre:"Recesvinto",
      color:"royalblue",
      precio:141
    },{
      nombre:"Sisebuto",
      color:"teal",
      precio:69
    }
  ]

   const newReyes = reyes.map((rey) => {
     return {key: Date.now() + Math.random(), ...rey }
   });

   const [stock, setStock] = useState(newReyes);
   
 
    const updateStock = (id) =>{
      const stockR = stock.filter((rey) => id !== rey.key);
      setStock(stockR);
    }
       
      

         
   
    
    return ( 
         
        <div className="card-container">
           {
             stock.map(rey => 
                 <Card
                    key={rey.key}
                    id={rey.key} 
                    rey={rey.nombre}
                    precio={rey.precio}
                    color={rey.color}
                    updateStock={updateStock}
                    setTotal={setTotal}
                    >

                </Card>
             )
           }
        </div>
     );
       
     
}

export default Reyes;