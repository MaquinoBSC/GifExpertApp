import React, { useState } from 'react';
import AddCategory from './components/AddCategory';

export default function GifExpertApp(){
    const [ categories, setCategories ]= useState( ['One Punch', 'Samurai X', 'Dragon Ball'] ); 

    const handleAdd= ()=> {
        const name= "Hora de Aventura";
        setCategories([ ...categories, name ]);
    }

    return (
        <>
            <h2> GifExpertApp </h2>
            <AddCategory setCategories={ setCategories } />
            <hr />

            <button onClick={ ()=> handleAdd() }> Agregar </button>
            <ol>
                {
                    categories.map(( category )=> {
                        return (
                            <li key={ category }>{ category }</li>
                        )
                    })
                }
            </ol>
        </>
    )
}