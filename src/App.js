import { useReducer } from 'react';
import './App.css';
import React, {useState, useEffect } from 'react';

   
function Header(props) {
  return (
    <header>
      <h1>{props.name}'s Kitchen</h1>
    </header>
  )
}

function Main(props) {
  return (
    <section>
      <p>This is where you can find the most {props.adjective} food around!</p>
      <img src="https://res.cloudinary.com/dleicsu2y/image/upload/v1613650045/MYWEB/gabrielle-henderson-djY0xDWCEUM-unsplash_ej0ywj.jpg" height={200} alt=""/>
      <ul style={{ textAlign: "left" }}>
      {props.dishes.map((dish) => 
        <li key={dish.id}>{dish.title} </li>)}
      </ul>
    </section>
  );
}
const dishes = [
  "Mac & Cheese",
  "Salmon",
  "Tofu with Vegies", 
  "Pizza"
];

const dishObjects = dishes.map( (dish, i) => ({id : i, title: dish}))
console.log(dishObjects);

function Footer(props){
  return( 
    <footer>
      <h3>Copyright {props.year}</h3>
    </footer> 
  );
} 

function Checkbox() {
  const [ checked, toggle] = useReducer(
    (checked) => !checked,
    false
  );

  return (
    <>
      <input type="checkbox" value={checked} onChange={toggle} />
    </>
  );
}

function Fetch({login}) {
  const [ data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${login}`)
      .then((response) => response.json())
      .then(setData);
  }, []);
 
    if (data) {
      return <div>{JSON.stringify(data)}</div>
    }
    return <div>No User available data</div>
};
 
function App() {
  return (
    <div className="App">  
     <Header name="Brigi"/>
     <Main adjective="delicious" dishes={dishObjects}/>
     <Footer year={new Date().getFullYear()}/>
     <Checkbox/>
     <Fetch login="Sziszkabigi"/>
    </div>
  );
}

export default App;
