import { useState } from "react";

const AddCategory = (props) => {
    const { setCategories } = props;
    const [ inputValue, setInputValue ] = useState('');

    const onInputChange = ({ target }) => {
        setInputValue(target.value);
    }
    
    const onSubmit = (evt) => {
        evt.preventDefault();

        if(inputValue.trim().length <= 1) return;

        setCategories((categories) => [ inputValue, ...categories ]);
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
