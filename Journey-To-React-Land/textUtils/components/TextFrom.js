import React, { useState } from "react";


function TextFrom(props) {
  const [text, setText] = useState("");
  const [btnDisable, setButtonDisabled] = useState(true);
  const handleChange = (e) => {
    setText(e.target.value);
    //console.log("On change was triggered")
    if(text.length < 2){
      setButtonDisabled(true)
    }
    else{
      setButtonDisabled(false)
    }
  };

  const toUpper = () => {
    const newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase", "success")
  };

  const toLower = ()=>{
    const newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase", "success")
  }

  const handleCopyText = ()=>{
    const copyText = text;
    navigator.clipboard.writeText(copyText);
    props.showAlert("Text Copied", "info")
  }

  const handleExtraSpaces = ()=>{
    const newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Extra Spaces Removed", "info")
  }

  return (
    <>
      <h1  style={{color: props.mode ==="dark"? "white": "#26355D"}} >{props.heading}</h1>
      <div className="mb-3 container">
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="10"
          value={text}
          onChange={handleChange}
          style={{color: props.mode ==="dark"? "white": "#26355D", backgroundColor: props.mode ==="dark"? "#5C88C4": "white"}}
        ></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={toUpper} disabled= {btnDisable}>
        Convert to Upper Case
      </button>
      <button className="btn btn-primary mx-2" onClick={toLower} disabled= {btnDisable}>
        Convert to Lower Case
      </button>
      <button className="btn btn-primary mx-2" onClick={handleCopyText} disabled= {btnDisable}>
        Copy Text
      </button>
      <button className="btn btn-primary mx-2" onClick={handleExtraSpaces} disabled= {btnDisable} >
        Remove Spaces
      </button>
      <div className="container my-3" style={{color: props.mode ==="dark"? "white": "#26355D"}}>
        <h2>Your text summary here.</h2>
        <p>{text.split(" ").filter((ele)=> { return ele.length !==0}).length} words, {text.length} characters</p>
        <p>Time to Read : {((text.split(" ").filter((ele)=> { return ele.length !==0}).length) * 0.5 / 60).toFixed(2)  } min </p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}

export default TextFrom;
