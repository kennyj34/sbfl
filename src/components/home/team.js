import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import {Card, Modal, Button} from 'react-bootstrap';

//import sbfl from './public/asset/sbfl_logo.jpg';

var imageArray = [];
imageArray[0] = {
  image01: new Image(),
  src: "/asset/Crawdads.png",
  imageCaption: "Shane"
};
imageArray[1] = {
  image01: new Image(),
  src: "/asset/Hammers.png",
  imageCaption: "KJ"
};
imageArray[2] = {
  image01: new Image(),
  src: "/asset/Ducks.jpg",
  imageCaption: "Chris"
};
imageArray[3] = {
  image01: new Image(),
  src: "/asset/Fryers.jpg",
  imageCaption: "Stocko"
};
imageArray[4] = {
  image01: new Image(),
  src: "/asset/Raccoons.jpg",
  imageCaption: "Snow"
};
imageArray[5] = {
  image01: new Image(),
  src: "/asset/Rats.png",
  imageCaption: "Tur"
};
imageArray[6] = {
  image01: new Image(),
  src: "/asset/Reapers.jpg",
  imageCaption: "Ira"
};
imageArray[7] = {
  image01: new Image(),
  src: "/asset/Snorks.jpg",
  imageCaption: "Casey"
};
imageArray[8] = {
  image01: new Image(),
  src: "/asset/Bombers.jpg",
  imageCaption: "Ant"
};
imageArray[9] = {
  image01: new Image(),
  src: "/asset/Stingers.png",
  imageCaption: "Noon"
};
imageArray[10] = {
  image01: new Image(),
  src: "/asset/Seamen.png",
  imageCaption: "Frank"
};
imageArray[11] = {
  image01: new Image(),
  src: "/asset/Wolves.jpg",
  imageCaption: "Cook"
};

var images = imageArray.map(function (Image) {
  return <Image src={images} rounded />;
});

const Teams = (props) => {

  const [showShane, setShowShane] = useState(false);
  const [showKenny, setShowKenny] = useState(false);

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
const handleKennyClose = () => {
  setShowKenny(false);
  }
  
  const handleKennyOpen = () => {
    setShowKenny(true);
  }

  
console.log({images})
  return (
    <div>
      <h1 style={{textAlign:'center'}}>Meet The Teams</h1>
      <br></br>
      <div style={{textAlign:'center'}}>
      <Card className="mx-auto"style={{ width: '20%', backgroundColor:'lightgray' }}>
        <Card.Title>Chesapeake Crawdads</Card.Title>
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
        <Modal.Body>
          <div>
            <div>
            1st place finishes: 0
            </div>
            <div>
              Records: 
            </div>
            <ul>
              <li>Most Weeks Survived (57)</li>
              <li>Most 1st Round Byes (2)</li>
              <li>Current Consecutive Playoffs Made (3)</li>
              <li>Most Playoff Apperances (5)</li>
              <li>Longest Postseason Losing Streak (3)</li>
            </ul> 
          </div>
          </Modal.Body>
      </Modal>
      <Card className="mx-auto"style={{ width: '20%', backgroundColor:'lightgray' }}>
        <Card.Title>Mexico City Hammers</Card.Title>
        <Card.Img src={kj} style={{mixBlendMode:'darken'}} alt="image" />
        <Card.Body>
        <Button variant="primary"
      type="button"
      onClick={handleKennyOpen}>Click for Info</Button>
        </Card.Body>
      </Card>
      <Modal show={showKenny}
      onHide={handleKennyClose}
      fullScreen="md-down"
      centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Mexico City Hammers</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <div>
            1st place finishes: 0
            </div>
            <div>
              Records: 
            </div>
            <ul>
              <li></li>
            </ul> 
          </div>
          </Modal.Body>
      </Modal>
      <div>
        <h4>Virginia Beach Ducks</h4>
        <a href="/" className="picture">
          <img style={{mixBlendMode:'darken'}} src={chris} alt="image" />
        </a>
        <button>
          Click Me!
        </button>
      </div>
      <div>
        <h4>Philadelphia Fryers</h4>
        <a href="/" className="picture">
          <img src={stocko} alt="image" />
        </a>
        <button>
          Click Me!
        </button>
      </div>
      <div>
        <h4>NYC Pizza Rats</h4>
        <a href="/" className="picture">
          <img style={{mixBlendMode:'darken'}} src={tur} alt="image" />
        </a>
        <button>
          Click Me!
        </button>
      </div>
      <div>
        <h4>Wright County Wolves</h4>
        <a href="/" className="picture">
          <img src={cook} alt="image" />
        </a>
        <button>
          Click Me!
        </button>
      </div>
      <div>
        <h4>Portsmouth Seamen</h4>
        <a href="/" className="picture">
          <img src={frank} alt="image" />
        </a>
        <button>
          Click Me!
        </button>
      </div>
      <div>
        <h4>Bagdhad Bombers</h4>
        <a href="/" className="picture">
          <img src={ant} alt="image" />
        </a>
        <button>
          Click Me!
        </button>
      </div>
      <div>
        <h4>Butte Snorkelers</h4>
        <a href="/" className="picture">
          <img style={{mixBlendMode:'darken'}} src={casey} alt="image" />
        </a>
        <button>
          Click Me!
        </button>
      </div>
      <div>
        <h4>Carolina Reapers</h4>
        <a href="/" className="picture">
          <img src={ira} alt="image" />
        </a>
        <button>
          Click Me!
        </button>
      </div>
      <div>
        <h4>Kentucky Raccoons</h4>
        <a href="/" className="picture">
          <img style={{mixBlendMode:'darken'}} src={snow} alt="image" />
        </a>
        <button>
          Click Me!
        </button>
      </div>
      <div>
        <h4>South Bend Stingers</h4>
        <a href="/" className="picture">
          <img src={noon} alt="image" />
        </a>
        <button>
          Click Me!
        </button>
      </div>
      </div>
    </div>
  );
};

export default Teams;
