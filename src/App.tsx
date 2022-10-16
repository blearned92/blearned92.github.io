import { BrowserRouter} from 'react-router-dom';
import { AppRoutes } from './router/AppRoutes';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import { useState } from 'react';

function App() {

  return (
    <BrowserRouter>
        <NavBar/>
        <AppRoutes/>
        <Footer/>
    </BrowserRouter>
  )
}

export default App;
