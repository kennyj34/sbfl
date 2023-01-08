import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import {Card, Modal, Button} from 'react-bootstrap';

//import sbfl from './public/asset/sbfl_logo.jpg';

var imageArray = [];
imageArray[0] = {
  image01: new Image(),
  src: "./asset/Crawdads.png",
  imageCaption: "Shane"
};
imageArray[1] = {
  image01: new Image(),
  src: "/asset/Hammers.png",
  imageCaption: "KJ"
};
imageArray[2] = {
  image01: new Image(),
  src: "./asset/Ducks.jpg",
  imageCaption: "KJ"
};
imageArray[3] = {
  image01: new Image(),
  src: "./asset/Fryers.jpg",
  imageCaption: "KJ"
};
imageArray[4] = {
  image01: new Image(),
  src: "./asset/Raccoons.jpg",
  imageCaption: "KJ"
};
imageArray[5] = {
  image01: new Image(),
  src: "./asset/Rats.png",
  imageCaption: "KJ"
};
imageArray[6] = {
  image01: new Image(),
  src: "./asset/Reapers.jpg",
  imageCaption: "KJ"
};
imageArray[7] = {
  image01: new Image(),
  src: "./asset/Snorks.jpg",
  imageCaption: "KJ"
};
imageArray[8] = {
  image01: new Image(),
  src: "./asset/Bombers.jpg",
  imageCaption: "KJ"
};
imageArray[9] = {
  image01: new Image(),
  src: "./asset/Stingers.png",
  imageCaption: "KJ"
};
imageArray[10] = {
  image01: new Image(),
  src: "./asset/Seamen.png",
  imageCaption: "KJ"
};
imageArray[11] = {
  image01: new Image(),
  src: "./asset/Wolves.jpg",
  imageCaption: "KJ"
};

var images = imageArray.map(function (Image) {
  return <Image src={images} rounded />;
});

const Teams = (props) => {

  const [showShane, setShowShane] = useState(false);

  const shane = imageArray[0].src;
  const kj = imageArray[1].src;
  const chris = imageArray[2].src;
  const stocko = imageArray[3].src;
  const snow = imageArray[4].src;
  const tur = imageArray[5].src;
  const ira = imageArray[6].src;
  const casey = imageArray[7].src;
  const ant = imageArray[8].src;
  const noon = imageArray[9].src;
  const frank = imageArray[10].src;
  const cook = imageArray[11].src;

const handleShaneClose = () => {
setShowShane(false);
}

const handleShaneOpen = () => {
  setShowShane(true);
}

  
console.log({images})
  return (
    <div>
      <h1>Meet The Teams</h1>
      
      <Card style={{ width: '18rem', backgroundColor:'lightgray' }}>
        <Card.Title>Crawdads</Card.Title>
        <Card.Img src={shane} alt="image" />
        <Card.Body>
        <Button variant="primary"
      type="button"
      onClick={handleShaneOpen}>Click for Info</Button>
        </Card.Body>
      </Card>
      <Modal show={showShane}
      onHide={handleShaneClose}
      fullScreen="md-down"
      centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Crawdads</Modal.Title>
        </Modal.Header>
        <Modal.Body>Hello</Modal.Body>
      </Modal>
      <div>
        <h4>Hammers</h4>
        <img style={{mixBlendMode:'darken'}}src={kj} alt="image" />
        <a href="/kj" className="picture">
          
        </a>
        <button>
          Click Me!
        </button>
      </div>
      <div>
        <h4>Ducks</h4>
        <a href="/" className="picture">
          <img style={{mixBlendMode:'darken'}} src={chris} alt="image" />
        </a>
        <button>
          Click Me!
        </button>
      </div>
      <div>
        <h4>Fryers</h4>
        <a href="/" className="picture">
          <img src={stocko} alt="image" />
        </a>
        <button>
          Click Me!
        </button>
      </div>
      <div>
        <h4>Rats</h4>
        <a href="/" className="picture">
          <img style={{mixBlendMode:'darken'}} src={tur} alt="image" />
        </a>
        <button>
          Click Me!
        </button>
      </div>
      <div>
        <h4>Wolves</h4>
        <a href="/" className="picture">
          <img src={cook} alt="image" />
        </a>
        <button>
          Click Me!
        </button>
      </div>
      <div>
        <h4>Seamen</h4>
        <a href="/" className="picture">
          <img src={frank} alt="image" />
        </a>
        <button>
          Click Me!
        </button>
      </div>
      <div>
        <h4>Bombers</h4>
        <a href="/" className="picture">
          <img src={ant} alt="image" />
        </a>
        <button>
          Click Me!
        </button>
      </div>
      <div>
        <h4>Snorks</h4>
        <a href="/" className="picture">
          <img style={{mixBlendMode:'darken'}} src={casey} alt="image" />
        </a>
        <button>
          Click Me!
        </button>
      </div>
      <div>
        <h4>Reapers</h4>
        <a href="/" className="picture">
          <img src={ira} alt="image" />
        </a>
        <button>
          Click Me!
        </button>
      </div>
      <div>
        <h4>Raccoons</h4>
        <a href="/" className="picture">
          <img style={{mixBlendMode:'darken'}} src={snow} alt="image" />
        </a>
        <button>
          Click Me!
        </button>
      </div>
      <div>
        <h4>Stingers</h4>
        <a href="/" className="picture">
          <img src={noon} alt="image" />
        </a>
        <button>
          Click Me!
        </button>
      </div>
    </div>
  );
};

export default Teams;
