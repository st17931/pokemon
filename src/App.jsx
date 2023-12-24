import './App.css'
import { useDispatch } from 'react-redux'
import { useEffect } from "react"
import { fetchData, fetchMoreData } from './Redux/cardSlice/cardSlice'
import CardGrid from './components/cardGrid'
import DropDown from './components/DropDown'
import Input from './components/Input'
import React from 'react'


function App() {
  
  const dispatch = useDispatch();

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

 

  console.log("App component is rendered");

  return (
    <>
      <div 
      className='nav d-flex justify-content-between my-3'
      >
        


         <Input/>

        <DropDown/>

      </div>
      <CardGrid />
    </>
  )
}

export default App
