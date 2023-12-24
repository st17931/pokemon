import { useSelector } from "react-redux";
import Card from "./Card";
import React from "react";


const CardGrid = ()=>{
    const state = useSelector((state) => state.card.items)
    const loading = useSelector((state)=> state.card.isLoading);

    console.log("state in the cardGrid Component", state);

    return(
        
        
        <div className="row gx-0">
        {state.map((singleCard)=>(
            <Card  key={singleCard.id} name={singleCard.forms[0].name} id={singleCard.id} type={singleCard.types} stats={singleCard.stats}/> 
        ))}
        {loading && <p>Loading....!!</p>}
        </div>
    )
}

export default CardGrid;