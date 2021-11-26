import React from 'react'
import "./Multi.css"
import Box from '../../components/box/Box'
import { useState,useEffect } from 'react/cjs/react.development';
import react from 'react';

export default function MultipleBox() {
    var count = 0;
    var arr = []
    var clickArr = []
    

    const createArray = () => {

        for (var i = 1; i <= 16; i++) {
            var component = {
                id: i,
                class: `box${i} blue`
            };
            arr.push(component);
        }
    }
    const [DataBag, setDataBag] = useState(arr);
    const gotClick = (e,id)=>{
        clickArr.push(e);
        count++; 
        
        if(count>2){
            var last = clickArr[clickArr.length-3] ;
            last.target.className= last.target.className.split(" ")[0]+" "+last.target.className.split(" ")[1]+" blue";
            
        }
    }
   
   
   
    createArray();
    let id = 0
    
    return (
        <div className="container">
            
            {DataBag.map((data)=>{

                return(
                    <div onClick={(e)=>gotClick(e,data.id)} >
                        <Box id={data.class} />
                    </div>
                )
            })}
        </div>
    )
}
