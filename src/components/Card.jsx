import React from "react";

function Card({rey, precio, color, id, updateStock, setTotal}) {
     
    const comprar = () =>{
       setTotal(e => e + precio);
    }

    return ( 
        
        <div className="card" style={{ backgroundColor: color}}>
            <h2>{rey}</h2>
             <img src= {`https://www.html6.es/img/rey_${rey.toLowerCase()}`}  alt= {rey} />
             <div className="card-info">
                <p>Precio:</p>
                <p>{precio}</p>
                <button onClick={() => {comprar(), updateStock(id)}} > Comprar </button>
             </div>
        </div>
       

     );
}

export default Card;