import './App.css'
import CardGrid from './components/cardGrid'
import DropDown from './components/DropDown'
import Input from './components/Input'
import React from 'react'


function App() {
  
  

 

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
