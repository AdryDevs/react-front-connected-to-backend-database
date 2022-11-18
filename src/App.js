import './App.css';


import Header from './Components/Header.jsx'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
// import Login from './Components';
// import Register from './Components';
// import Pelis from './Components';
// import Series from './Components';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

       <Header/>
       <Routes>
        <Route path={"/Pelis"} element={<Pelis/>}/>
        <Route path={"/Series"} element={<Series/>}/>
        <Route path={"/login"} element={<Login/>}/>
        <Route path={"/register"} element={<Register/>}/>
       </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
