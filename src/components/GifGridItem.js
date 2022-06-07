import React from 'react';

export default function GifGridItem({ id, title, url }){
    return (
        <div>
            <img src={ url } alt={ title } />
            <p> { title } </p>
        </div>
    )
}