import { useState } from "react";

import AddCategory from "./components/AddCategory";

const GifExpertApp = () => {
    const [ categories, setCategories ] = useState(['js', 'node']);

    return (
        <>
            <h1>Gift Expert App</h1>

            <AddCategory setCategories={ setCategories } />

            <ol>
                { categories.map((category) => <li key={ category }>{ category }</li>)}
            </ol>
        </>
    )
}

export default GifExpertApp;