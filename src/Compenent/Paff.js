import React, { useContext } from 'react';
import './head_style.css';
import Affichage from './Affichage';
import { test } from './Context';

export default function Paff() {

  const {searchTerm, setSearchTerm,sortedArray,sorttabl} = useContext(test)


  return (
    <div>
      <h1 className='titre'>CONTACT LIST</h1>
      <div className='bar'>
        <div className='search-container'>
          <form >
            <input type="text" placeholder="Search.." value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)} className='p' name="search"/>
          </form>
        </div>
      </div>

      <Affichage />
    </div>
  )
}

