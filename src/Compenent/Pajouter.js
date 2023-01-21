import React, { useContext } from 'react'
import {test} from './Context'
import './pajouter.css';
export default function Pajouter() {


    const {ncont,setNcont,nnum,setnnum,ajout,ville,setVille} = useContext(test);

  return (
    <div>
      <h1>ADD NEW CONTACT</h1>
      <input type="text" value={ncont} onChange={(e)=>setNcont(e.target.value)} placeholder="Nom"  className='remp'/> <br />
      <input type="tel" value={nnum} onChange={(e)=>setnnum(e.target.value)} placeholder="Numero De Telefon"  className='remp'/> <br />
      <input type="text" value={ville} onChange={(e)=>setVille(e.target.value)}  placeholder="Ville " className='remp'/> <br />
      <input type="button" value='ajouter' onClick={()=>ajout()} className='ajout' />
    </div>
  )
}
