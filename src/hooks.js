import React, { useState, useEffect } from "react";
import axios from "axios";
import uuid from "uuid";

function useFlip (){
    const [state, setState] = useState(true);
    const flipState = () => {
    setState(state => !state);
    };
    return [state, flipState];
}

// function useAxios (url){
//     const [state, setState] = useState([]);
//     const addState = async () => {
//         const response = await axios.get(url);
//         setState(state => [...state, { ...response.data, id: uuid() }]);
//   };
//   return [state, addState]
// }


function useAxios(url){
    const [state, setState] = useState([]);
    console.log("useAxios in hook")
    const addState = async (name) => {
        console.log(name[0])
        if(name[0] !== undefined){
            try{
            const response = await axios.get(url+`/${name}/`);
            setState(state => [...state, { ...response.data, id: uuid() }]);
            } catch(e){
                console.log(e);
            }
        } else {
            const response = await axios.get(url);
            setState(state => [...state, { ...response.data, id: uuid() }]);
        }
    
    }
    return [state, addState] 
}



export {useFlip, useAxios};