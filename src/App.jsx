import React from "react";
import "./App.css";

function App() {
  return <PersonList />;
}

function PersonList() {
  const people = [
    {
      img: 35,
      name: "john",
      job: "developer",
    },
    {
      img: 78,
      name: "james",
      job: "designer",
    },
    {
      img: 90,
      name: "luke",
      job: "artist",
    },
  ];

  return (
    <section>
      <Person person={people[0]} />
      <Person person={people[1]}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem
       nihil provident!
      </Person>
      <Person person={people[2]} />
    </section>
  );
}
function Person(props) {
  const { img, name, job } = props.person;
  const {children} = props
  const url = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`;
  return (
    <div className="person">
      <div className="cover">
        <img src={url} alt="" />
        <div className="text-section">
          <h3>{name}</h3>
          <h4>{job}</h4>
          <p>{children}</p>
        </div>
      </div>
    </div>
  );
}
export default App;
