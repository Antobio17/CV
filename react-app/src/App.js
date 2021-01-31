import './assets/css/App.css';
import 'bootstrap/dist/css/bootstrap.css';

// To import components
import Footer from './components/Footer';
import Header from './components/Header';
import DarkMode from './components/DarkMode';


// To import images
import img_profile from './assets/images/img_profile.png';
import img_tecnologias from './assets/images/img_tecnologias.png';
import img_conocimientos from './assets/images/img_conocimientos.png';
import img_otros from './assets/images/img_otros.png';
import CardContainer from './components/CardContainer';
import Tecnologias from './components/Tecnologias';
import Conocimientos from './components/Conocimientos';
import Otros from './components/Otros';


function App() {
  return (
    <div className="App">
      <DarkMode/>
      <header>
        <Header
          img_profile={img_profile}
          name="Antonio"
          intro="Actualmente estudio Ingeniería Informatica en la UGR"
        />
      </header>

      <main className="Main">
        <div className="Container">
          <CardContainer img={img_tecnologias} title="Tecnologías">
            <Tecnologias/>
          </CardContainer>
          <CardContainer img={img_conocimientos} title="Conocimientos">
            <Conocimientos/>
          </CardContainer>
          <CardContainer img={img_otros} title="Otros">
            <Otros/>
          </CardContainer>
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
