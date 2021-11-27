import React from "react";
import "./news.css";

import Card from "../../components/card/Card";
import { useState, useEffect } from "react";

export default function News() {
  const [data, setData] = useState([]);
  let globalData=[],last=0;
  function getData() {
    // var url =
    //   "https://newsapi.org/v2/everything?" +
    //   "q=Apple&" +
    //   "from=2021-11-27&" +
    //   "sortBy=popularity&" +
    //   "apiKey=c1d605ea2ff6453fbd3118718686ea3b";

    return data;
  }
  useEffect(() => {
    let status = false;
    var url = "http://localhost:4000/data";
    const fectchData = async()=>{
        try{
            const response = await fetch(url);
            const json =  await response.json();
            setData(json);
            last=10;
            globalData=json;
        }
        catch(err){
            console.log(err)
        }
    }
    fectchData();
    // var Data = "";
    // var req = new Request(url);
    // fetch(req).then(function (response) {
    //   Data = response.json();
    //   setData(Data.data);
    //   console.log(Data.data)
    // });
    
  }, []);
  const addMore = ()=>{
      last=last+10;
      console.log(last)
      if(last<globalData.length)
        setData(globalData.slice[0,last]);
        console.log(globalData);
  } 

  return (
    <div className="">
        <div className="cardHolder">
            {data.length>0?data.map((x)=>{
            return(<Card headline={x.name} content={x.text} />)  
            
        }):"Loading your users"}
        </div>
        
        {}
        <button className="btn" onClick={addMore}>Load more</button>
        <button className="btn danger">Load less</button>
      
    </div>
  );
}
