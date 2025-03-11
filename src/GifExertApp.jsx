import { useState } from "react";

import AddCategory from "./components/AddCategory";
import GiftGrid from "./components/GiftGrid";

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

            { categories.map((category) => <GiftGrid key={ category } category={ category } /> )}
        
        </>
    )
}

export default GifExpertApp;