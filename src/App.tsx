import { BrowserRouter} from 'react-router-dom';
import { AppRoutes } from './router/AppRoutes';
import './App.css';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <AppRoutes></AppRoutes>
    </BrowserRouter>
  );
}

export default App;
