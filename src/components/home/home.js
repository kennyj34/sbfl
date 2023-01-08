import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

export default function Home() {
  return (
  <div >
    <h1 style={{display:'flex', justifyContent:'center'}}>Welcome to the SBFL Website</h1>
    <div style={{display:'flex', justifyContent:'center'}}><img style={{mixBlendMode:'darken'}} width={250} height={250}
              src='./asset/sbfl.jpeg' alt="image" /></div>
    <p style={{display:'flex', justifyContent:'center', marginBottom:'100px'}}> 
    SBFL is a prestigous fantasy football league created in 2019 from an Atlantic City hotel room. They employ the top of the line fantasy footballers in the world and Noonan
    </p>
    <div>
      <h3>Belt Bowl Winners: </h3>
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
    </div>
    <div>
      <h3>Podcast</h3>
      <iframe style={{borderRadius:'12px'}} src="https://open.spotify.com/embed/show/1pkZSwHy4Gn7bI2KhOJs3a?utm_source=generator&theme=0" width="100%" height="200" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    </div>
  </div>
  );
}