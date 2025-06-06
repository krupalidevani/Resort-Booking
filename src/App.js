import logo from './logo.svg';
import './App.css';
import '../src/style/style.scss';
import Header from './componet/Header';
import HeroSlider from './componet/HeroSlider';
import AboutUs from './componet/AboutUs';
import Home from '../src/page/home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">      
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
