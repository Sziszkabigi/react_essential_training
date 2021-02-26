import './App.css';

   
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

function Footer(props){
  return( 
    <footer>
      <h3>Copyright {props.year}</h3>
    </footer> 
  )
} 

const dishes = [
  "Mac & Cheese",
  "Salmon",
  "Tofu with Vegies", 
  "Pizza"
];

const dishObjects = dishes.map( (dish, i) => ({id : i, title: dish}))
console.log(dishObjects);

function App() {
  return (
    <div className="App">  
     <Header name="Brigi"/>
     <Main adjective="delicious" dishes={dishObjects}/>
     <Footer year={new Date().getFullYear()}/>
    </div>
  );
}
/**  we also can use fragmentation instead od div if we want */
export default App;
