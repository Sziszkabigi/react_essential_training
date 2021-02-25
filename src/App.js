
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
    </section>
  )
}
function Footer(props){
  return(
    <footer>
      <h3>Copyright {props.year}</h3>
    </footer>
  )
}
function App() {
  return (
    <div className="App">
     <Header name="Brigi"/>
     <Main adjective="delicious"/>
     <Footer year={new Date().getFullYear()}/>
    </div>
  );
}

export default App;
