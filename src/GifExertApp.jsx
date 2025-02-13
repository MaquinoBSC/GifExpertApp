import { useState } from "react";

const GifExpertApp = () => {
    const [ categories, setCategories ] = useState(['js', 'node']);

    return (
        <>
            <h1>Gif Expert App</h1>

            <ol>
                { categories.map((category) => <li key={ category }>{ category }</li>)}
            </ol>
        </>
    )
}

export default GifExpertApp;