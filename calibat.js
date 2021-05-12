import React, { useCallback, useState} from "react";
import {Fiminus, Fiplus} from  "react-incons/fi";

export default function PageInputCallback () {
    cont [state, setState] = useState(0);

    const increment = useCallback(()=>{
        setState(state +1)
    },[state])
    const decrement = useCallback(() =>{
        setState(state -1)
    },[state])
    const handleChange = useCallback(()=>{
        setState(Number(event.target.value))
    },[state])

    return (
        <div className="content">
            <button onClik={decrement}>
                <FiMinus/>
            </button>
            <inpu
                type="number"
                step="1"
                value={state}
                onChange={handleChange}
                />
                <button onChange={increment}>
                    <FiPlus/>
                </button>
        </div>
        
    )
}

const contex = createContext ()

export contex = createContext()

export function PageContextProvider({ children}) {
    const [state, setState] = useState(0);
        
    const increment = useCallback(( )=>
        setState(state +1)
    },[state])
    const decrement = useCallback(()=>{
        setState(state -1)
    },[state])
    const handleChange =useCallback(()=>{
        setState(Number(event.target.value))
    },[state])

    return(
        <Context.Provider value ={{state, increment, decrement handleChange}}>{children}</Context.Provider>
    )

export default function PageInputContext (){
    const {state, increment, decrement, handleChange} = useContext (Context)

    return (
        <div className="content">
            <button onClik={decrement}>
                <FiMinus/>
            </button>
            <inpu
            type="numeber"
            step="1"
            value={state}
            onClik={handleChange}
            />
            <button onClik={increment}>
                <Fiplus/>
            </button>
        </div>
    );
}