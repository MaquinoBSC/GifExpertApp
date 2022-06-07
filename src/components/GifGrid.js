import React, { useState, useEffect } from 'react';
import { getGifs } from '../helpers/GetGifs';
import GifGridItem from './GifGridItem';

export default function GifGrid({ category }){
    const [ images, setImages ]= useState( [] );

    useEffect(()=> {
        getGifs(category)
            .then( imgs=> setImages(imgs));
    }, [ category ]);

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