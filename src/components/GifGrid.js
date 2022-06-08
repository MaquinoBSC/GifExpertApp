import React, { } from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
// import { getGifs } from '../helpers/GetGifs';
// import GifGridItem from './GifGridItem';

export default function GifGrid({ category }){
    // const [ images, setImages ]= useState( [] );
    const { data, loading }= useFetchGifs();

    // useEffect(()=> {
    //     getGifs(category)
    //         .then( imgs=> setImages(imgs));
    // }, [ category ]);

    return (
        <>
            <h2> { category } </h2>
            { loading ? 'Cargando...' : 'Fin de carga' }
            {/* <div className='card-grid'>
                {
                    images.map(( img )=> (
                        <GifGridItem key={ img.id } { ...img } />
                    ))
                }
            </div> */}
        </>
    )
}