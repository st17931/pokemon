import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchSingleData } from "../Redux/cardSlice/cardSlice";


const Input = ()=>{
    const [inputValue, setInputValue] = useState('');
    const dispatch = useDispatch();

    const handleKeyPress = (event) => {
      if (event.key === 'Enter') {
        dispatch(fetchSingleData(inputValue));
        console.log('Entered value:', inputValue);
      }
    };

    return  <input
    type="text"
    placeholder="Enter id or name of pokemon and press Enter"
    value={inputValue} 
    className='w-50'
    onChange={(e) => setInputValue(e.target.value)}
    onKeyDown={handleKeyPress}
  />
}

export default Input