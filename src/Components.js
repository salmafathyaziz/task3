import React from 'react';
import './App.css';


 function Components(props) {
     return (
        <div className="alldivs" >
     
    <div className="shadow2" >
<img src={props.image}  /></div>
<div className="work">
<p>{props.name}</p>
<h1>{props.time}</h1>
<p>{props.last}</p></div>




</div>
     )
 }
 export default Components;