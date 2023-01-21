import React, { useContext } from 'react'
import { test } from './Context';
import './contact.css'
export default function Affichage() {

    const {list,supp,searchTerm} = useContext(test);

  return (
    <div className='list'>
    {
        list.filter((val)=>{
            if (searchTerm == ""){
                return val;
            }else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())){
                return val;
            }
        }).map((el)=>{
            return (
                <div className='aff'>
                    <div>
                        <h3><span>Nom : </span> {el.name}</h3>
                        <h3><span>Numero : </span> {el.num}</h3>
                        <h3><span>Ville : </span> {el.ville}</h3>
                    </div>

                    <div className='supp'>
                    <input key={el.id} type="button" value="supprimer" className='sup' onClick={()=>supp(el.id)} />
                    </div>
                </div>

            )
        })
    }



      

    </div>
  )
}
