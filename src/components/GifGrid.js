import React, { } from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';

export default function GifGrid({ category }){
    const { data: images, loading }= useFetchGifs( category );

    return (
        <>
            <h2 className="animate__animated animate__fadeInTopLeft"> { category } </h2>
            {
                loading && <p className='animate__animated animate__flash'>Cargando...</p>
            }
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