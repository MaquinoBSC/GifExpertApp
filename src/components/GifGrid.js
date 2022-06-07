import React, { useState, useEffect } from 'react';
import GifGridItem from './GifGridItem';

export default function GifGrid({ category }){
    const [ images, setImages ]= useState( [] );

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
        setImages( gifs );
    }

    return (
        <>
            <h2> { category } </h2>
            <div className='card-grid'>
                {
                    images.map(( img )=> (
                        <GifGridItem key={ img.id } { ...img } />
                    ))
                }
            </div>
        </>
    )
}