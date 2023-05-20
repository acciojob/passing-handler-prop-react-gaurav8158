import React,{useState} from "react";


let Selection=({keys,applyColor})=>{
    console.log(keys,applyColor())
    console.log(applyColor())
    function colorChange(e){
        console.log(e.target)
        let v=e.target;
        v.style.backgroundColor=`${applyColor().background}`
    }
    return (
        <div>
            <div
           //add style
        style={{width:"100px"}
        }
             className={keys}
             onClick={colorChange}
             >hi</div>
        </div>
    )
}
export default Selection