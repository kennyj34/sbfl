import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import {Card, Modal, Button,Tab,Tabs} from 'react-bootstrap';


export default function Home() {
  return (
    <div>
      <Card className="mx-auto"style={{width:'90%'}}>
    <Tabs
      defaultActiveKey="home"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
  <Tab eventKey="home" title="Home">
    <div className="mx-auto">
    <h1 style={{display:'flex', justifyContent:'center'}}>Welcome to the SBFL Website</h1>
    <div style={{display:'flex', justifyContent:'center'}}><img style={{mixBlendMode:'darken'}} width={250} height={250}
              src='/asset/sbfl.jpg' alt="image" /></div>
    <p style={{display:'flex', justifyContent:'center', marginBottom:'100px'}}> 
    SBFL is a prestigous fantasy football league created in 2015 from an Atlantic City hotel room. They employ the top of the line fantasy footballers in the world and Matt Cook
    </p>
    </div>
    </Tab>
    <Tab eventKey="belt" title="Belt Bowl">
    <Card border="primary"className='mx-auto mb-2'style={{width:'90%'}}>
      <Card.Header><h3>Belt Bowl Winners:</h3> </Card.Header>
      <Card.Body>
    <Carousel variant='dark'>
      <Carousel.Item>
        <div style={{marginBottom:'100px'}}>
        <div style={{display:'flex',justifyContent:'center'}}>
          <h5>2022 Belt Bowl Winner: Casey Conwell</h5><br></br>
          
        </div>
        <div style={{display:'flex',justifyContent:'center'}}>
          <img style={{mixBlendMode:'darken'}}src='./asset/Snorks.jpg' alt="image" />
        </div>
        <Carousel.Caption>
          <div style={{marginTop:'50px'}}>
          Team: Butte Snorkelers
          </div>
        </Carousel.Caption>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div style={{marginBottom:'100px'}}>
        <div style={{display:'flex', justifyContent:'center'}}>
          <h5>2021 Belt Bowl Winner: Ira Dogruyol</h5>
        </div>
        <div style={{display:'flex',justifyContent:'center'}}>
        <img style={{mixBlendMode:'darken'}}src='./asset/Reapers.jpg' alt="image" />
        </div>
        <Carousel.Caption>
          <div>
            Team: Carolina Reapers
          </div>
        </Carousel.Caption>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div style={{marginBottom:'100px'}}>
        <div style={{display:'flex', justifyContent:'center'}}>
          <h5>2020 Belt Bowl Winner: Matt Turowski</h5>
        </div>
        <div style={{display:'flex',justifyContent:'center'}}>
          <img style={{mixBlendMode:'darken'}}src='./asset/Rats.png' alt="image" />
        </div>
        <Carousel.Caption>
          <div>
            Team: NYC Pizza Rats
          </div>
        </Carousel.Caption>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div style={{marginBottom:'100px'}}>
        <div style={{display:'flex', justifyContent:'center'}}>
          <h5>2019 Belt Bowl Winner: Matt Turowski</h5>
        </div>
        <div style={{display:'flex',justifyContent:'center'}}>
          <img style={{mixBlendMode:'darken'}}src='./asset/Rats.png' alt="image" />
        </div>
        <Carousel.Caption>
          <div>
            Team: NYC Pizza Rats
          </div>
        </Carousel.Caption>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div style={{marginBottom:'100px'}}>
        <div style={{display:'flex', justifyContent:'center'}}>
          <h5>2018 Belt Bowl Winner: John Snow</h5>
        </div>
        <div style={{display:'flex',justifyContent:'center'}}>
          <img style={{mixBlendMode:'darken'}}src='./asset/Raccoons.jpg' alt="image" />
        </div>
        <Carousel.Caption>
          <div>
            Team: Kentucky Raccoons
          </div>
        </Carousel.Caption>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div style={{marginBottom:'100px'}}>
        <div style={{display:'flex', justifyContent:'center'}}>
          <h5>2017 Belt Bowl Winner: Casey Conwell</h5>
        </div>
        <div style={{display:'flex',justifyContent:'center'}}>
          <img style={{mixBlendMode:'darken'}}src='./asset/Snorks.jpg' alt="image" />
        </div>
        <Carousel.Caption>
          <div>
            Team: Butte Snorks
          </div>
        </Carousel.Caption>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div style={{marginBottom:'100px'}}>
        <div style={{display:'flex', justifyContent:'center'}}>
          <h5>2016 Belt Bowl Winner: Anthony Cafiero</h5>
        </div>
        <div style={{display:'flex',justifyContent:'center'}}>
          <img style={{mixBlendMode:'darken'}}src='./asset/Bombers.jpg' alt="image" />
        </div>
        <Carousel.Caption>
          <div>
            Team: Bagdhad Bombers
          </div>
        </Carousel.Caption>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div style={{marginBottom:'100px'}}>
        <div style={{display:'flex', justifyContent:'center'}}>
          <h5>2015 Belt Bowl Winner: Casey Conwell</h5>
        </div>
        <div style={{display:'flex',justifyContent:'center'}}>
          <img style={{mixBlendMode:'darken'}}src='./asset/Snorks.jpg' alt="image" />
        </div>
        <Carousel.Caption>
          <div>
            Team: Butte Snorks
          </div>
        </Carousel.Caption>
        </div>
      </Carousel.Item>
    </Carousel>
    </Card.Body>
    </Card>
    </Tab>
    <Tab eventKey="sb" title="Sticker Bitch">
    <div>
    <Card border="primary" className="mx-auto mb-2"style={{width:'90%'}}>
      <Card.Header><h3>Sticker Bitches</h3></Card.Header>
      <Card.Body>
    <Carousel variant='dark'>
      <Carousel.Item>
        <div style={{marginBottom:'100px'}}>
        <div style={{display:'flex',justifyContent:'center'}}>
          <h5>2022 Sticker Bitch: Daniel Noonan </h5><br></br>
          
        </div>
        <div style={{display:'flex',justifyContent:'center'}}>
          <img style={{mixBlendMode:'darken'}}src='./asset/Stingers.png' alt="image" />
        </div>
        <Carousel.Caption>
          <div style={{marginTop:'50px'}}>
          Team: South Bend Stingers
          </div>
        </Carousel.Caption>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div style={{marginBottom:'100px'}}>
        <div style={{display:'flex', justifyContent:'center'}}>
          <h5>2021 Sticker Bitch: Daniel Noonan</h5>
        </div>
        <div style={{display:'flex',justifyContent:'center'}}>
        <img style={{mixBlendMode:'darken'}}src='./asset/Stingers.png' alt="image" />
        </div>
        <Carousel.Caption>
        <div style={{marginTop:'50px'}}>
          Team: South Bend Stingers
          </div>
        </Carousel.Caption>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div style={{marginBottom:'100px'}}>
        <div style={{display:'flex', justifyContent:'center'}}>
          <h5>2020 Sticker Bitch: Frank Avenoso, Jr</h5>
        </div>
        <div style={{display:'flex',justifyContent:'center'}}>
          <img style={{mixBlendMode:'darken'}}src='./asset/Seamen.png' alt="image" />
        </div>
        <Carousel.Caption>
          <div>
            Team: Portsmouth Seamen
          </div>
        </Carousel.Caption>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div style={{marginBottom:'100px'}}>
        <div style={{display:'flex',justifyContent:'center'}}>
          <h5>2019 Sticker Bitch: Daniel Noonan </h5><br></br>
          
        </div>
        <div style={{display:'flex',justifyContent:'center'}}>
          <img style={{mixBlendMode:'darken'}}src='./asset/Stingers.png' alt="image" />
        </div>
        <Carousel.Caption>
          <div style={{marginTop:'50px'}}>
          Team: South Bend Stingers
          </div>
        </Carousel.Caption>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div style={{marginBottom:'100px'}}>
        <div style={{display:'flex', justifyContent:'center'}}>
          <h5>2018 Sticker Bitch: Frank Avenoso, Jr</h5>
        </div>
        <div style={{display:'flex',justifyContent:'center'}}>
        <img style={{mixBlendMode:'darken'}}src='./asset/Seamen.png' alt="image" />
        </div>
        <Carousel.Caption>
        <div style={{marginTop:'50px'}}>
          Team: Portsmouth Seamen
          </div>
        </Carousel.Caption>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div style={{marginBottom:'100px'}}>
        <div style={{display:'flex', justifyContent:'center'}}>
          <h5>2017 Sticker Bitch: Kenny Jones</h5>
        </div>
        <div style={{display:'flex',justifyContent:'center'}}>
          <img style={{mixBlendMode:'darken'}}src='./asset/Hammers.png' alt="image" />
        </div>
        <Carousel.Caption>
          <div>
            Team: Mexico City Hammers
          </div>
        </Carousel.Caption>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div style={{marginBottom:'100px'}}>
        <div style={{display:'flex', justifyContent:'center'}}>
          <h5>2016 Sticker Bitch: Daniel Noonan</h5>
        </div>
        <div style={{display:'flex',justifyContent:'center'}}>
        <img style={{mixBlendMode:'darken'}}src='./asset/Stingers.png' alt="image" />
        </div>
        <Carousel.Caption>
        <div style={{marginTop:'50px'}}>
          Team: Dynamite
          </div>
        </Carousel.Caption>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div style={{marginBottom:'100px'}}>
        <div style={{display:'flex', justifyContent:'center'}}>
          <h5>2015 Sticker Bitch: Drew Schuerholz</h5>
        </div>
        <div style={{display:'flex',justifyContent:'center'}}>
          <img style={{mixBlendMode:'darken'}}src='./asset/drew.jpg' alt="image" />
        </div>
        <Carousel.Caption>
          <div>
            Team: RIP John Snow
          </div>
        </Carousel.Caption>
        </div>
      </Carousel.Item>
      </Carousel>
      </Card.Body>
    </Card>
    </div>
    </Tab>
    </Tabs>
    </Card>
    <div className="mt-2">
      <Card border="primary" className="mx-auto" style={{width:'90%'}}>
      <Card.Header><h3>Podcast</h3></Card.Header>
      <Card.Body>
        <iframe style={{borderRadius:'12px'}} src="https://open.spotify.com/embed/show/1pkZSwHy4Gn7bI2KhOJs3a?utm_source=generator&theme=0" width="100%" height="200" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </Card.Body>
      </Card>
    </div>
    </div>
  
  );
}