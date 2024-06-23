import React, { useState } from "react";

function TextFrom(props) {
  const [text, setText] = useState("Enter your text here");
  const handleChange = (e) => {
    setText(e.target.value);
    //console.log("On change was triggered")
  };

  const handleClick = () =>{
    const newText = text.toUpperCase();
    setText(newText);
    alert("Button was clicked")
  }

  return (
    <div>
      <h1>{props.heading}</h1>
      <div class="mb-3">
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="10"
          value={text}
          onChange={handleChange}
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleClick}>Convert to Upper Case</button>
    </div>
  );
}

export default TextFrom;
