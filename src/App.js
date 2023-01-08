
import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Home from './components/home/home';
import Teams from './components/home/team';
import Shane from './components/home/shane';
import KJ from './components/home/kj';
import Stocko from './components/home/stocko';
import RecordBook from './components/home/recordbook';
import { BrowserRouter, Route,Routes } from 'react-router-dom'; 


function App() {
  return (
    <div>
      <Navbar bg="dark" variant="dark" >
      <Container fluid>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/team">Teams</Nav.Link>
            <Nav.Link href="/recordbook">Record Book</Nav.Link>
            <Nav.Link href="https://docs.google.com/spreadsheets/d/1mq9FQxZ6fRvTr_NMEuKgr0OAsAETxTJ3J-eTkoE37gY/edit#gid=0">Playoff Machine</Nav.Link>
          </Nav>
      </Container>
    </Navbar>
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/team" element={<Teams/>} />
        <Route exact path="/shane" element={<Shane/>} />
        <Route exact path="/kj" element={<KJ/>} />
        <Route exact path="/stocko" element={<Stocko/>} />
        <Route exact path="/recordbook" element={<RecordBook/>} />

      </Routes>
      </BrowserRouter>

  </div>
      
  );
}

export default App;
