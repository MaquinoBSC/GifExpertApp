import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

export default function GifExpertApp(){
    const [ categories, setCategories ]= useState( ['Dragon Ball'] ); 

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
                            <GifGrid key={ category } category={ category } />
                        )
                    })
                }
            </ol>
        </>
    )
}