import React from 'react'
import { useState } from 'react'
import "./Box.css"


export default function Box({color,id}) {
    var Color =color;
    const classnew = `box ${id}`
    var count =0;
    const clicked = (e)=>{
        var newClass= e.target.className.split(" ")[0]+" "+e.target.className.split(" ")[1]+" red";
        e.target.className=newClass;
    
        
    }
    return (
        <div className={classnew} style={{background:Color}} onClick={(e)=>clicked(e)}>
            
        </div>
    )
}

