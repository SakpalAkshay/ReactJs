import Navbar from "./components/Navbar";
import TextFrom from "./components/TextFrom";
function App() {
  return (
    <>
    <Navbar title="TextUtils"/>
    
    <div className="container my-3"><TextFrom heading="Enter text here to analyze"/></div>
    </>
  );
}

export default App;
