import React from "react";
import './App.css';
import  jeremy from'./pics/image-jeremy.png';
import work from './pics/icon-work.svg';
import play from './pics/icon-play.svg';
import study from './pics/icon-study.svg';
import exercise from './pics/icon-exercise.svg';
import social from './pics/icon-social.svg';
import self from './pics/icon-self-care.svg';

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
       <img  src={jeremy} alt="img"></img>
        <p>report for</p>
        <h1>Jeremy <br/>
             Robson</h1> </div>
            
           <div className="alldivs">

       <div className="shadow2">
    <img src={work} alt="img1"></img>
    </div>
    <div className="work">
    <p>Work</p> 
        <h1> 32hrs</h1>
        <p>Last week - 36hrs</p> </div> </div>  

        <div className="shadow3">
    <img src={play} alt="img2"></img> </div>

    <div className="play"><p>Play</p>
        <h1> 10hrs</h1>
        <p>Last week - 8hrs</p> </div>

        <div className="shadow4">
    <img src={study} alt="img3"></img> </div>

    <div className="study">
    <p>Study</p> 
        <h1> 4hrs</h1>
        <p>Last week - 7hrs</p> </div>
    


<div className="shadow5">
    <img src={exercise} alt="img4"></img> </div>

    <div className="exercise">
    <p>Exercise</p> 
        <h1> 4hrs</h1>
        <p>Last week - 5hrs</p>
</div>

<div className="shadow6">
   <img src={social} alt="img5"></img>
    </div>
   <div className="social">
     <p>Social</p>
   <h1> 5hrs</h1>
      <p>Last week - 10hrs</p>
</div>

<div className="shadow7">
    <img src={self} alt="img6"></img>
     </div>
    <div className="self">
    <p>Self Care</p>
        <h1> 2hrs</h1>
        <p>Last week - 2hrs</p>
</div>


      
 </div> 
    
  );
}

export default App;
