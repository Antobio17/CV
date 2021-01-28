import './assets/css/App.css';
import 'bootstrap/dist/css/bootstrap.css';

// To import components
import Footer from './components/Footer';
import Card from './components/Card';
import Header from './components/Header';

// To import images
import img_profile from './assets/images/img_profile.png';

function App() {
  return (
    <div className="App">
      <header>
        <Header
          img_profile={img_profile}
          name="Antonio"
          intro="Actualmente estudio Ingeniería Informatica en la UGR"
        />
      </header>

      <main className="Main">
        <div className="Container">
          <Card title="Tecnologías"/>
          <Card title="Conocimientos"/>
          <Card title="Otros"/>
          {/* <Card title="Conocimientos"/>
          <Card title="Otros"/> */}
        </div>
      </main>

      <footer>
        <Footer 
          location="Granada, España" 
          email="antoniojr997@gmail.com" 
          tlf="684144382" 
          instagram="https://www.instagram.com/antobio17/" 
          github="https://github.com/Antobio17"
        />
      </footer>
    </div>
  );
}

export default App;
