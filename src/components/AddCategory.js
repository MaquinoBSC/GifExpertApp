import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function AddCategory({ setCategories }){
    const [inputValue, setInputValue] = useState("");

    const handleChangeInput= ( e )=> {
        setInputValue(e.target.value);
    }

    const handleSubmit= (e)=> {
        e.preventDefault();

        if( inputValue.trim().length > 2 ){
            setCategories(( cats )=> [ ...cats, inputValue ]);
            setInputValue("");
        }
    }

    return (
        <>
            <form onSubmit={ (e)=> handleSubmit(e) }>
                <input type="text" value={ inputValue } onChange={ (e)=> handleChangeInput(e) } />
            </form>
        </>
    )
}

AddCategory.propTypes= {
    setCategories: PropTypes.func.isRequired,
}