import { useState } from "react"

export const useFetchGifs= ()=> {
    const [state, setSate]= useState({
        data: [],
        loading: true,
    });

    setTimeout(()=> {
        setSate({
            data: [1,2,3,4,5,6],
            loading: false,
        })
    }, 3000);

    return state;
}