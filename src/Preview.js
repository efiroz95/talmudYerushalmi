import { useState } from "react";
import './App.css';

function Preview (props){

    const [size, setSize] = useState(100)
    
    const zoomIn = ()=>{
        setSize(size+10)
    }

    const zoomOut = ()=>{
        setSize(size-10)
    }

    return(
      <div>
        <input type="button" value="+" onClick={zoomIn}/>
        <input type="button" value="-" onClick={zoomOut}/><br/>
        <img src={props.url} width={size+"%"}/>
      </div>
    )
  }
  export default Preview;