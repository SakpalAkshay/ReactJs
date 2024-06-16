import { useState } from "react"
import "./styles.css"

export default function App() {

 const [newItem,setNewItem] = useState()

  return <><form className = "new-item-form ">
    <div className="form-row">
      <label htmlFor="item">New Item </label>
{/* onChange is another prop that takes a function to be called when the input value changes. e*/}
      <input type="text"  value={newItem} onChange={e => e.target.value} id="item" />
    </div>
    <button className="btn">Add Task</button>
  </form>

  <h1 className="header">To Do List</h1>
  <ul className="list">
  <li>
    <label> <input type="checkbox" />
      Item 1
    </label>
    <button className="btn btn-danger">Delete</button>
  </li>
  <li>
    <label> <input type="checkbox" />
      Item 2
    </label>
    <button className="btn btn-danger">Delete</button>
  </li>
  </ul>
</>
}
