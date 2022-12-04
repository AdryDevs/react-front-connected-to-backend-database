import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap';



import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Home from './Containers/Home/Home';
import Header from './Components/Header/Header';
import Movies from "./Containers/Movies/Movies";
import Series from './Containers/Series/Series';
import Login from "./Containers/LoginContainer/LoginContainer";
import Register from "./Containers/RegisterContainer/RegisterContainer";

function App() {

  return (
    <Container fluid className="App">
      <BrowserRouter>

        <Header/>
        <Routes>
          
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/movies" element={<Movies/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/series" element={<Series/>}/>

        </Routes>

      </BrowserRouter>     

    </Container>
  );
}

export default App;
