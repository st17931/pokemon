import { useEffect, useState }  from "react";
import { useDispatch } from "react-redux";
import { filterByType } from "../Redux/cardSlice/cardSlice";
import React from "react";


const DropDown = () => {
    const dispatch = useDispatch();

    const [types, setTypes] = useState([]);
    const [selectedType, setSelectedType] = useState('');

    useEffect(()=>{
        fetchPokemonTypes();
    },[])

    const fetchPokemonTypes = async () => {
        try {
            const response = await fetch('https://pokeapi.co/api/v2/type');
            const data = await response.json();
            setTypes(data.results.map((type) => type.name));
        } catch (error) {
            console.error('Error fetching Pokemon types:', error);
        }
    };

    const handleTypeChange = (event) => {
        setSelectedType(event.target.innerText);
        console.log("type inside dropdown is",event.target.innerText);
        dispatch(filterByType(event.target.innerText));
    };


    return (
        <div className="dropdown w-25">
            <button
                className="btn btn-lg btn-info dropdown-toggle w-100 d-flex justify-content-between align-items-center"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
            >
                <span>{selectedType || 'Type'}</span>
            </button>
            <ul className="dropdown-menu">
                {types.map((type) => (
                    <li key={type} className="dropdown-item" onClick={handleTypeChange}>
                        {type}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default DropDown;