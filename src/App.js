import React from "react";
import "./App.css";
import Panel from "./components/panel"
import ShowRoom from "./components/showroom";


function App() {
  return (
    <section className="container">
      <div className='content'>
        <Panel />  
        <ShowRoom />  
      </div>
    </section>
  );
}

export default App;
