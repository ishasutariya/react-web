// import logo from './logo.svg';
import './App.css';
import Mainpage from './components/Account/Mainpage';
import Punkte from './components/Account/Punkte';
import Home from './components/Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/punkte' element={<Punkte/>} />
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
