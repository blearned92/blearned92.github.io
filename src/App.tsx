import { BrowserRouter} from 'react-router-dom';
import { AppRoutes } from './router/AppRoutes';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

function App() {

  return (
    <>
      <NavBar/>
      <BrowserRouter>
        <AppRoutes/>
      </BrowserRouter>
    </>  
  )
}

export default App;
