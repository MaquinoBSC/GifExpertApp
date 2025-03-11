import { useState } from "react";

import AddCategory from "./components/AddCategory";

const GifExpertApp = () => {
    const [ categories, setCategories ] = useState(['js', 'node']);

    const onAddCategory = (value) => {
        if(categories.includes(value)) return
        
        setCategories([ value, ...categories ]);
    }

    return (
        <>
            <h1>Gift Expert App</h1>

            <AddCategory onNewCategory={ onAddCategory } />

            <ol>
                { categories.map((category) => <li key={ category }>{ category }</li>)}
            </ol>
        </>
    )
}

export default GifExpertApp;