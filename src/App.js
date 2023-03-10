import "./App.css";
import React, { useEffect, useState } from "react";
import { Amazoncard } from "./cards";
import { Flipkartcards } from "./cards";
import axios from "axios";

function App() {
  const [name, setname] = useState("");
  const [home, setHome] = useState("");

  useEffect(() => {
    axios.get("http://localhost:2023/home").then(function (response) {
      setHome(response.data);
    });
  }, []);

  async function postproductname(e) {
    e.preventDefault();

    try {
      await axios.post("http://localhost:2023/postproductname", {
        name,
      });
    } catch (error) {
      console.log(error);
    }
  }

  // window.onload = function(){
    
    
    // window.addEventListener('DOMContentLoaded', function() {

    // let AmzClick = ()=>{
      
    // }
      
    // });
    
  // }


  return (
    <div className="main">
      <div className="nav">
        <nav>
          <h2>Title</h2>
              <div className="nav-li">
            <a>hello</a>
            <a>hxd</a>
            <a>cxxcv</a>
            <a>gxcgnf</a>
          </div>
        </nav>

        <div className="searchDiv">
          <form onSubmit={postproductname}>
            <input
              type="text"
              value={name}
              onChange={(e) => setname(e.target.value)}
            ></input>
            <button type="submit">submit</button>
          </form>
        </div>
      </div>
      <div className="body-content">
        <div className="content-element">
          <div className="amazon-content">
            <div className="amazon-title">
              <h2>Amazon</h2>
            </div>

            <div className="card_cont">
              <Amazoncard />
            </div>
          </div>
          <div className="flipkart-content">
            <div className="flipkart-title">
              <h2>Flipkart</h2>
            </div>

            <div className="card_cont">
              <Flipkartcards />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
