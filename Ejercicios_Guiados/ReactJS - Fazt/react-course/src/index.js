import React, {useState, useEffect} from 'react'
import ReactDOM from 'react-dom/client'
import { /*Greeting,*/ UserCard } from './Greeting';
//import Product, { Navbar } from "./Product";
import Button from './Button';
import { TaskCard } from './Task';
import { Saludar } from './Saludar';
import { Posts } from './Posts';

const root = ReactDOM.createRoot(document.getElementById("root"));

const users = [
  {
    id: 1,
    name: "Ryan Yan",
    image: "https://robohash.org/user1",
  },
  {
    id: 2,
    name: "Joe McMillan",
    image: "https://robohash.org/user2",
  },
  {
    id: 3,
    name: "Mario Castillo",
    image: "https://robohash.org/user3",
  },
];

const HandleChange = (e) => console.log(e.target.value)
const holaNames = users.map((user) => {return user.name})
console.log(holaNames);

function Counter(){

  const [ counter, setCounter ] = useState(0);
  useEffect(() => {
    console.log("render");
  }, [counter]);

  // Para ejecutar el useEffect una sola vez
  // const [ counter, setCounter ] = useState(0);
  // useEffect(() => {
  //   console.log("render");
  // }, []);

  // Se ejecuta cada vez que cambie el componente
  // const [ counter, setCounter ] = useState(0);
  // useEffect(() => {
  //   console.log("render");
  // });

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Sumar
      </button>
      <button
        onClick={() => {
          setCounter(counter - 1);
        }}
      >
        Restar
      </button>
      <button
        onClick={() => {
          setCounter(0);
        }}
      >
        Reiniciar
      </button>
    </div>
  );
}

const TestInput = () => {
  const [mensaje, setMensaje] = useState('');

  return (
    <div>
      <input
        onChange={(e) => {
          setMensaje(e.target.value);
        }}
      />
      <button
        onClick={() => {
          console.log(mensaje);
        }}
      >
        Enviar Mensaje
      </button>
      <p>{mensaje}</p>
    </div>
  );
}

root.render(
  <>

    <TestInput />

    <br />
    <br />

    <Counter />

    <br />
    <br />

    {users.map((user, i) => {
      return (
        <div key={i}>
          <h1>{user.name}</h1>
          <img src={user.image} alt="" />
        </div>
      );
    })}

    <br />
    <br />

    <Posts />

    <TaskCard ready={true} />
    <Saludar />
    <Button text="Saludar" />
    <input id="hola" onChange={HandleChange} />

    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log("Enviado");
      }}
    >
      <h1>Registro de Usuario</h1>
      <button>Enviar</button>
    </form>

    <br />
    <br />

    <Button text="Click Me" />
    <Button text="Pay" />
    <Button text="Go to" name="Joe" />

    <UserCard
      name="Yefri Ramos"
      amount={3000}
      married={true}
      points={[99, 33.3, 22.2]}
      address={{ street: "123 Main Street", city: "New York" }}
      greet={function () {
        alert("Hello");
      }}
    />

    <UserCard
      name="Joe McMillan"
      amount={1000}
      married={false}
      points={[100, 20]}
      address={{ street: "321 Second Street", city: "Florida" }}
      greet={function () {
        alert("Bye");
      }}
    />
  </>
);