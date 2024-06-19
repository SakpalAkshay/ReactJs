
import React, { useState } from 'react';

function App() {
  // Initial heading for the counter button
  let counterHeading = "This is counter button!!! Press this to increase counter.";

  // State declaration using useState hook
  const [count, setCount] = useState(0);

  // Function to increase the count when button is clicked
  const increase = () => {
    // Using the functional form of setState to update count
    setCount((prevCount) => prevCount + 1);
  };

  // JSX structure of the component
  return (
    <div className="counterContainer">
      {/* Display the heading */}
      <h1>{counterHeading}</h1>
      
      {/* Button to increase the count, onClick event handler calls increase function */}
      <button onClick={increase} id="btn">Press Me !!!</button>
      
      {/* Display the current count */}
      <h3>{count}</h3>
    </div>
  );
}

export default App;

