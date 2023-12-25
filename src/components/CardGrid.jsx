import { useDispatch, useSelector } from "react-redux";
import { fetchData, fetchMoreData } from "../Redux/cardSlice/cardSlice";
import Card from "./Card";
import React, { useEffect } from "react";


const CardGrid = ()=>{
    const dispatch = useDispatch();
    const state = useSelector((state) => state.card.items)
    const loading = useSelector((state)=> state.card.isLoading);

    console.log("state in the cardGrid Component", state);


    const handleScroll = () => {
        if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
          dispatch(fetchMoreData());
        }
      }
    
     
    
      useEffect(() => {
        dispatch(fetchData());
      }, []);
    
      useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        }
      }, []);

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