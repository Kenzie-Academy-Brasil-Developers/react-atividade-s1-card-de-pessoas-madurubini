import "./App.css";
import Developer from "./components/Developer/Developer";

function App() {
  let person1 = {
    name: "Lucas",
    age: 18,
    country: "Alemanha",
  };

  let person2 = {
    name: "Madu",
    age: 22,
    country: "Brasil",
  };

  let person3 = {
    name: "José",
    age: 25,
    country: "Peru",
  };

  return (
    <div className="App">
      <header className="App-header">
        <Developer
          name={person1.name}
          age={person1.age}
          country={person1.country}
        />
        <Developer
          name={person2.name}
          age={person2.age}
          country={person2.country}
        />
        <Developer
          name={person3.name}
          age={person3.age}
          country={person3.country}
        />
      </header>
    </div>
  );
}

export default App;
