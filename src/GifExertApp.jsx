import { useState } from "react";

const GifExpertApp = () => {
    const [ categories, setCategories ] = useState(['js', 'node']);

    const onAddCategory = () => {
        setCategories([ ...categories, 'sql']);
    }

    return (
        <>
            <h1>Gif Expert App</h1>

            <ol>
                { categories.map((category) => <li key={ category }>{ category }</li>)}
            </ol>

            <button onClick={ onAddCategory }>Agregar categoria</button>
        </>
    )
}

export default GifExpertApp;