import React from "react";
import "./App.css";

function App() {
  return <PersonList />;
}

function PersonList() {
  return <Person />;
}
function Person(params) {
  const url =  "https://randomuser.me/api/portraits/thumb/men/75.jpg";
  return (
    <div className="person">
      <div className="cover">
        <img src={url} alt="" />
        <div className="text-section">
          <h4>name</h4>
          <h4>Job</h4>
        </div>
      </div>
    </div>
  );
}
export default App;
