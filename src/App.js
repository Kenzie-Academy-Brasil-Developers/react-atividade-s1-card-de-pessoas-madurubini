import "./App.css";
import Developer from "./components/Developer/Developer";

function App() {
  let people = [
    {
      name: "Lucas",
      age: 18,
      country: "Alemanha",
    },
    {
      name: "Madu",
      age: 22,
      country: "Brasil",
    },
    {
      name: "José",
      age: 25,
      country: "Peru",
    },
  ];

  let person = people.map(function (item) {
    return [item.name, item.age, item.country];
  });

  return (
    <div className="App">
      <header className="App-header">
        <Developer name={person[0]} />
      </header>
    </div>
  );
}

export default App;
