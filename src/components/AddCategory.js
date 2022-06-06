import React, { useState } from 'react';

export default function AddCategory(){
    const [inputValue, setInputValue] = useState("");

    const handleChangeInput= ( e )=> {
        setInputValue(e.target.value);
    }

    const handleSubmit= (e)=> {
        e.preventDefault();
    }

    return (
        <>
            <form onSubmit={ (e)=> handleSubmit(e) }>
                <input type="text" value={ inputValue } onChange={ (e)=> handleChangeInput(e) } />
            </form>
        </>
    )
}