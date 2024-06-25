import React, { useState } from "react";

function TextFrom(props) {
  const [text, setText] = useState("Enter your text here");
  const handleChange = (e) => {
    setText(e.target.value);
    //console.log("On change was triggered")
  };

  const toUpper = () => {
    const newText = text.toUpperCase();
    setText(newText);
    alert("Converted to Uppercase");
  };

  const toLower = ()=>{
    const newText = text.toLowerCase();
    setText(newText);
    alert("Converted to Lower Case")
  }

  return (
    <>
      <h1>{props.heading}</h1>
      <div className="mb-3 container">
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="10"
          value={text}
          onChange={handleChange}
        ></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={toUpper}>
        Convert to Upper Case
      </button>
      <button className="btn btn-primary mx-2" onClick={toLower}>
        Convert to Lower Case
      </button>
      <div className="container my-3">
        <h2>Your text summary here.</h2>
        <p>{text.split(" ").length} words, {text.length} characters</p>
        <p>Time to Read : {(text.split(" ").length * 0.5 / 60).toFixed(2)  } min </p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}

export default TextFrom;
