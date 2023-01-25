import { BrowserRouter} from 'react-router-dom';
import { AppRoutes } from './router/AppRoutes';
import './App.scss';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import { useState } from 'react';

function App() {

  return (
    <>
      <div className='header'>Header</div>
      <div className='container'>
        <aside className='app-left'></aside>
        <aside className='app-middle'>
          <BrowserRouter>
              <AppRoutes/>
          </BrowserRouter>
        </aside>
        <aside className='app-right'></aside>      
      </div>
    </>
    
    
  )
}

export default App;
