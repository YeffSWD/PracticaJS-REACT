export function Greeting({ title, name = "User" }) {
  console.log(title, name);
  return (
    <div>
      <h1>
        {title} dice {name}
      </h1>
    </div>
  );
}

export function UserCard({ name, amount, married, points, address, greet }) {
  return (
    <div>
      <h1>{name}</h1>
      <p>{amount}</p>
      <p>{married ? "Married" : "Single"}</p>
      <p>{points}</p>
      <ul>
        <li>{address.city}</li>
        <li>{address.street}</li>
      </ul>
    </div>
  );
}
