import React from "react";
import ReactDom from "react-dom/client";
import "../src/styles/index.css";

import pizzaData from "./data";

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>cyberdust pizza house</h1>;
    </header>
  );
}
function Menu() {
  const pizzasList = pizzaData;
  //   const pizzasList = [];
  const lenthCheck = pizzasList.length;
  return (
    <div className="menu">
      <h2>cyberdust menu</h2>

      {lenthCheck > 0 ? (
        <>
          <p>
            we have such an amazing cuisine with losts of dirrenent tastes and
            preferences come try it out !
          </p>
          <ul className="pizzas">
            {pizzasList.map((pizza, index) => (
              <Pizza
                key={index}
                name={pizza.name}
                ingredients={pizza.ingredients}
                price={pizza.price}
                photoName={pizza.photoName}
                soldOut={pizza.soldOut}
              />
            ))}
          </ul>
        </>
      ) : (
        <p>sorry there is no pizzas to order </p>
      )}
    </div>
  );
}

function Footer() {
  //get current time from Date object
  const hour = new Date().getHours();
  const minutes = new Date().getMinutes();
  //defining business logic (hours)
  const openHours = 12;
  const closeHour = 22;
  const isOpen = hour >= openHours && hour <= closeHour;
  const status = isOpen ? "open" : "closed";
  const hourString = `${hour + ":" + minutes} we are currently ${status} !`;

  return <footer className="footer"> {hourString}</footer>;
}

function Pizza(props) {
  //   if (props.soldOut) return null;
  const { name, ingredients, price, photoName, soldOut } = props;
  const alt = `just a ${name}`;

  return (
    <li className={`pizza ${soldOut ? "sold-out" : ""}`}>
      <img src={photoName} alt={alt} />
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <span>{soldOut ? "Sold Out" : `Price: $${price}`}</span>
      </div>
    </li>
  );
}

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
