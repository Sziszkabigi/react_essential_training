import { useReducer } from 'react';
import './App.css';
import React, {useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import {Home, About, Events, Contact, Whoops404} from './pages';

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
  const [ loading, setLoading] = useState(null);
  const [ error, setError] = useState(null);

  useEffect(() => {
    if (!login) return;
    setLoading(true);
    fetch(`https://api.github.com/users/${login}`)
      .then((response)  => response.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch(setError);
  }, [login]);

    if (loading) return <h1>Loading...</h1>;
    if (error) 
       return <pre>{JSON.stringify(error, null, 2)}</pre>;
    if (!data) return null;

    return (
      <div>
        <h2>Fetching data from Github </h2>
        <h1>{data.name}</h1>
        <p>{data.location}</p>
        <img alt={data.login} src={data.avatar_url}/>
      </div>
    );
  }

    //if (data) {
      //return <div>{JSON.stringify(data)}</div>
      //Displaying data from an API...
    /**return(
     * useEffect(() => {
    fetch(`https://api.github.com/users/${login}`)
      .then((response) => response.json())
      .then(setData)
     * 
      <div>
        <h2>Fetching data from Github </h2>
        <h1>{data.name}</h1>
        <p>{data.location}</p>
        <img alt={data.login} src={data.avatar_url}/>
      </div>);//
    }
    return <div>
      <h2>Fetching data from Github </h2>
      <p> No User available data</p>
      </div>*/

 
function App() {
  return (
    <div className="App">  
     <Header name="Brigi"/>
     <Main adjective="delicious" dishes={dishObjects}/>
     <Footer year={new Date().getFullYear()}/>
     <Checkbox/>
     <Fetch login="Sziszkabigi"/>
     <div>  
      <Routes>
        <Route path="/" element={<Home />}
         />
        <Route path="about" element={<About />} />
        <Route path="events" element={<Events />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<Whoops404 />} />
      </Routes>
    
    </div>
  );
    </div>
  ); 
} 



export default App;
