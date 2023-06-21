import React from "react";
import "./App.css";
import people from "../data";

function App() {
  return <PersonList />;
}

function PersonList() {
  const cards = people.map(item =>{
    return(
      <Person 
      key={item.img}
      {...item}
      />
    )
  })
  return (
    <section>
      {cards}
    </section>
  );
}
function Person(props) {
  const { img, name, job, text } = props;
  const {children} = props
  const url = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`;
  return (
    <div className="person">
      <div className="cover">
        <img src={url} alt="" />
        <div className="text-section">
          <h3>{name}</h3>
          <h4>{job}</h4>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
}
export default App;
