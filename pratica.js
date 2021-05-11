import React, {useCallback,useState} from "react";
import {Fiminus, FiPlus } from "react-incons/fi";

export default function PageInputCallback ()[
    cont [state, setState] = useState(0);

    const increment = useCallback(() =>{
        setState(state +1)
    }, [state])
    const decrement = useCallback(()=>{
        setState(state -1)
    },[state])
    const handleChange = useCallback ((event)=>{
        setState(Number(event.target.value))
},[state])
