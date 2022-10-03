import './App.css';
import { useState } from "react";
import Preview from "./Preview";

function Image(props) {
  const [show, setShow] = useState(false);

  const showImage = ()=>{
    setShow(!show)
  }

  return (
    <div>
        <input type="button" value="לחצו כאן להצגת התמונה" onClick={showImage}/>
        {show && <Preview url={props.url}/>}
    </div>
  );
}

export default Image;