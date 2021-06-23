import React, {useState} from 'react';

import "./App.css";



function App() {

  const state = useState();
  const [count,setCount] = useState(0);
  const IncNum = ()=>{
    document.querySelector("button").classList.toggle("all");
    var title = "name";
    localStorage.setItem(title,1);
    var va = Object.keys(localStorage).length;
      if(va == 1){
        setCount(count + 1)

        document.querySelector("h1").style.color ="red";
        document.querySelector("h1").style.opacity ="1";
        document.querySelector(".p").innerHTML = '🥰';
      }

    // }
    else if(count === 1){
      setCount(count - 1);
      document.querySelector("h1").style.color = "black";
      document.querySelector("h1").style.opacity = "0.5";
      document.querySelector(".p").innerHTML = "";
    }
  }
  return (
    <>
      <div className="wrapper">
        <div className="post-wrap">
          <nav className="profile">
            <div className="Img">
              <img
                className="proImg"
                src="https://images.unsplash.com/photo-1623038868323-7d39ec58eefe?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              />
            </div>
            <div className="name">
              <p>Md Noyon Khan</p>
              <span>12m ago</span>
            </div>
          </nav>

          <div className="post">
            <img src="https://images.unsplash.com/photo-1622988705101-22052afbf2d6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" />
          </div>
        </div>
        <div className="fotter">
          <h1 className="ncount">{count}</h1>
          <p className="p"></p>
          <button onClick={IncNum} value=" 🥰 ">
            {" "}
            🥰{" "}
          </button>
        </div>
      </div>
    </>
  );
}

export default App;

