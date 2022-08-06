import React from "react";
import spinnerGif from '../assets/Spinner.gif'
const Spinner =()=>{
    return(
        <div className="text-center">
            <img alt="loading" src={spinnerGif} className="d-block mx-auto w-25" />
        </div>
    )
}
export default Spinner;