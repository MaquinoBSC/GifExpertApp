import { useState } from "react";

const AddCategory = (props) => {
    const { onNewCategory } = props;
    const [ inputValue, setInputValue ] = useState('');

    const onInputChange = ({ target }) => {
        setInputValue(target.value);
    }
    
    const onSubmit = (evt) => {
        evt.preventDefault();

        if(inputValue.trim().length <= 1) return;

        onNewCategory( inputValue.trim() );
        setInputValue('');
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
