import { useState } from "react";

import AddCategory from "./components/AddCategory";

const GifExpertApp = () => {
    const [ categories, setCategories ] = useState(['js', 'node']);

    const onAddCategory = () => {
        setCategories([ ...categories, 'sql']);
    }

    return (
        <>
            <h1>Gift Expert App</h1>

            <AddCategory />

            <ol>
                { categories.map((category) => <li key={ category }>{ category }</li>)}
            </ol>

            <button onClick={ onAddCategory }>Agregar categoria</button>
        </>
    )
}

export default GifExpertApp;