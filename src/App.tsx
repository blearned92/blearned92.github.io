import { BrowserRouter} from 'react-router-dom';
import { AppRoutes } from './router/AppRoutes';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import { useState } from 'react';
import POKEApi from './components/Projects/POKEApi/POKEApi';

const decideRender = (state:String, setState:React.Dispatch<React.SetStateAction<String>>) => {
  if(state === 'project'){
    return (
      <div>
        <AppRoutes/>
      </div>
    )
  } else {
    return (
      <div>
        <NavBar/>
        <AppRoutes/>
        <Footer/>
      </div>
    )
  }
}

function App() {
  const [state, setState] = useState<String>('');

  return (
    <BrowserRouter>
      {decideRender(state, setState)}
    </BrowserRouter>
  )
}

export default App;
