import React, { useEffect, useState } from 'react';

export default ()=>{
    let [counter,setCounter]= useState(0);

    const fetchUser=useEffect(()=>{
        alert("FetchApi");
    },[counter])

    const increment = () =>{
        setCounter(counter++)
    }
    const desc = () =>{
        setCounter(counter--)
    }

    return {
        increment,
        counter,
        desc,
        fetchUser
    }
}

