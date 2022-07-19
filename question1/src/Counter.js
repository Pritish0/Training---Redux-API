import React,{useContext} from "react";
import { AppContext } from "./Store/Context";

export default function Counter(){

    const [ state, handleIncrement, handleDecrement, handleReset] = useContext(AppContext);

    return(
        <div>
            <h1>{state.counter}</h1>
            <button onClick={handleIncrement}>+</button>
            <button onClick={handleDecrement}>-</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    );
}
