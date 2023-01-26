
import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Home from './components/home/home';
import Teams from './components/home/team';
import Previous from './components/home/previousTeams';
import RecordBook from './components/home/recordbook';
import { BrowserRouter, Route,Routes } from 'react-router-dom'; 


function App() {
  return (
    <div>
      <Navbar  bg="primary" variant="dark" expand="lg" className="mb-2">
      <Container fluid>
          <Nav >
            <Nav.Link href="/"><h4><strong>Home</strong></h4></Nav.Link>
            <Nav.Link href="/team"><h4><strong>Teams</strong></h4></Nav.Link>
            <Nav.Link href="/recordbook"><h4><strong>Record Book</strong></h4></Nav.Link>
            <Nav.Link href="https://docs.google.com/spreadsheets/d/1mq9FQxZ6fRvTr_NMEuKgr0OAsAETxTJ3J-eTkoE37gY/edit#gid=0"><h4><strong>Playoff Machine</strong></h4></Nav.Link>
            <Nav.Link href="/previousTeams"><h4><strong>Retired Teams</strong></h4></Nav.Link>
          </Nav>
      </Container>
    </Navbar>
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/team" element={<Teams/>} />
        <Route exact path="/previousTeams" element={<Previous/>} />
        <Route exact path="/recordbook" element={<RecordBook/>} />

      </Routes>
      </BrowserRouter>

  </div>
      
  );
}

export default App;
