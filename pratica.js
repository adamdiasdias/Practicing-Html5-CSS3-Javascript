import React, {useState, useDebugValue} from "react";
import {FiMinus, FiPlus } from "react-icons/fi";


function useAnalyzeState(state) {
    useDebugValue(`State está $ {state}`);
    return state;
}

export default function PageInputDebugValue() {
    const [state, setState] = useState(0);

    useAnalyzeState(state)

    function increment(){
        setState(state + 1)
    }
    function decrement (){
        setState(state - 1)
    }
    function handleChange(event){
        setState(Number(event.target. value))
    }
    
} 