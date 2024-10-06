import React from 'react'
import { useEffect } from 'react';



export default function Carinho() {

   async function pegarPaises() {
        try{
            const response = await fetch("https://restcountries.com/v3.1/all")
            const data = await response.json()
            console.log(data);
        }catch(error) {
            console.log ("Deu erro: ", error);
        }
    }

    useEffect(() =>{
        pegarPaises()
      }, [] )
   
    
  return (
    <div>index</div>


    
  )
}
