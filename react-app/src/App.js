import logo from './assets/images/logo.svg';
import './assets/css/App.css';
import './assets/css/Footer.css';


//To import components
import MyComponent from './components/MyComponent';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <h1>Hola Mundo!!</h1>
      </header>
      <main>
        <p>Container</p>
      </main> 
      <Footer />
    </div>
  );
}

export default App;
