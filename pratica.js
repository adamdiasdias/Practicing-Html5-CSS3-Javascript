import React, { useCallback, useState} from "react";
import { Fiminus, FiPlus } from "react-incons/fi";

export default function PageInputCallback () {
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

return (
    <div className ="content">
        <button onClik={decrement}>
            <FiMinus />
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