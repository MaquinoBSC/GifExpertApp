import { useState } from "react";

const AddCategory = () => {
    const [ inputValue, setInputValue ] = useState('');

    const onInputChange = ({ target }) => {
        setInputValue(target.value);
    }
    
    const onSubmit = (evt) => {
        evt.preventDefault();
        console.log(inputValue);
    }
 
    return (
        <form onSubmit={ onSubmit }>
            <input 
                type="text"
                placeholder="Buscar gifts"
                value={ inputValue }
                onChange={ onInputChange }
            />
        </form>
    )
}

 export default AddCategory;
