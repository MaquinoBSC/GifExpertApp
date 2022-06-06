import React, { useState, useEffect } from 'react';

export default function GifGrid({ category }){
    const [counter, setcounter] = useState(0);

    useEffect(()=> {
        getGifs();
    }, []);
    
    const getGifs= async ()=> {
        const url= 'https://api.giphy.com/v1/gifs/search?api_key=dbzpRyieekgFAjfSqOzWXw0FNB3FlG6F&q=Rick+and+Morty&limit=10';
        const response= await fetch( url );
        const { data }= await response.json();
        const gifs= data.map(( img )=> {
            return {
                'id': img.id,
                'title': img.title,
                'url': img.images.downsized_medium.url,
            }
        });
        console.log(gifs);
    }

    return (
        <>
            <h2> { category } </h2>
            <p>{ counter }</p>
            <button onClick={ ()=> setcounter( counter + 1 ) }></button>
        </>
    )
}