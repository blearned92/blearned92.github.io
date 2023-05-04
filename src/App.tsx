import NavBar from './components/NavBar/NavBar';
import './App.scss';
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Projects from './components/Projects/Projects';
import ContactMe from './components/Contact/ContactMe';
import Footer from './components/Footer/Footer';

function App() {

  return (
    <>
    <div className='background'/>
    <NavBar/>
    <Header/>
    <About/>
    <Projects/>
    <ContactMe/>
    <Footer/>
    </>
  )
}

export default App;
