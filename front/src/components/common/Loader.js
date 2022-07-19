import React, { useState,useContext } from 'react';
import {CarNCoContext} from "../App";

function Loader(props) {

    console.log(props.show);
    const onCloseToast= useContext(CarNCoContext).closeToast;
    return (
       <>
           {
               props.show ?
               <div className="loading">Loading&#8230;</div>
                :
               <div></div>
           }
       </>
    );
}
export default Loader;