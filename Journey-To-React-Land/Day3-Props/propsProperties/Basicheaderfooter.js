import React from 'react'
import './simple.css';
import PropTypes from 'prop-types'; // need to import this
function BasicHeaderFooter(props) {
  
    return (
        <div className={props.name}>
        <nav className="navbar navbar-expand-lg" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">{props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Features</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Pricing</a>
              </li>
             
            </ul>
          </div>
        </div>
      </nav>
      </div>
    );
  }

  BasicHeaderFooter.propTypes = {
    name: PropTypes.string.isRequired, // if we dont supply name where component is getting used we will get an error
    // but as we have used a default value,  we wont be getting any here
    // name would take string value if we send some number we will get an error
  }


  BasicHeaderFooter.defaultProps = {
    name: "dark", //sets default value for our props
    title: "Header",
  }

 
  
  export default BasicHeaderFooter;