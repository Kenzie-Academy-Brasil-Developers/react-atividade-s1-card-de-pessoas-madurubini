import "./style.css";

function Developer({ name, age, country }) {
  return (
    <div className="Card">
      <h2>Dev: {name}</h2>
      <h3>Idade: {age}</h3>
      <h3>País: {country}</h3>
    </div>
  );
}

export default Developer;
