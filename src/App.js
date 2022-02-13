import React from "react";
import './App.css';
import  jeremy from'./pics/image-jeremy.png';
import Components from './Components';
import Data from './Data.js';



function App() {
  return (
     <div className="App">

<div className="shadow1"> 
<p>          
       <p>Daily</p>
        <p>Weekly</p>
        <p>Monthly</p> 
        </p>  
</div>

    <div className="Div">
       <img  src={jeremy} alt="img" className="jeremy"></img>
        <p>report for</p>
        <h1>Jeremy <br/>
             Robson</h1> </div>

<div>
             {Data.map((Item)=> {
        return(
            <Components key={Item.index} image={Item.image} name={Item.name}
            
            time={Item.time} last={Item.last}/> 

        ); 
 
         } )}  </div>
            

          


      
 </div> 
    
  );
}

export default App;
