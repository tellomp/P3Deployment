import React from "react";
import Carousel from 'react-bootstrap/Carousel';

function Slider () {
  return (
  <Carousel style= {{marginBottom:"58px", borderBottom:"500px"}}>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="http://i63.tinypic.com/24w7htu.jpg" 
      alt="First slide"
      style = {{height : "763px"}}
    />
    <Carousel.Caption>
<p style = {{ fontSize:"77px", fontFamily:"Karla"}}>DANGEROUS INTERSECTIONS <br></br><br></br><br></br> <br></br></p>
</Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <img
  className="d-block w-100"
  src="https://o.aolcdn.com/images/dims?quality=85&image_uri=http%3A%2F%2Fo.aolcdn.com%2Fhss%2Fstorage%2Fmidas%2Fe3b5269077139e1c4925c55b7243e187%2F203591431%2F458424464-ed.jpg&client=amp-blogside-v2&signature=165a486836d78c0674580faaff915992fc1a524e"
  alt = "Second slide"
  style = {{height : "763px"}}
  />
  <Carousel.Caption>
<h1 style = {{ fontSize:"40pt", fontFamily:"Karla"}}>DAN·​GER·​OUS IN·​TER·​SEC·​TION  </h1>
<p  style = {{fontSize:"20pt", fontFamily:"Karla"}}>   
: ABLE OR LIKELY TO INFLICT INJURY OR HARM <br></br>
: A PLACE OR AREA WHERE TWO OR MORE THINGS (SUCH AS STREETS) INTERSECT</p>

</Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="http://i63.tinypic.com/24c8dxh.png"
      alt="Third slide"
      style = {{height : "763px"}}
    />
   
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="http://i65.tinypic.com/fatudj.jpg"
      alt="Fourth slide"
      style = {{height : "763px"}}
    />
    <Carousel.Caption>
    <h3 style = {{fontSize: "90pt", fontFamily:"Karla"}}>WHO ARE WE?</h3>
    <p style = {{fontSize: "40pt", fontFamily:"Karla"}}>A PLACE WHERE YOU CAN ADD <br></br>AND <br></br>LOOK UP DANGEROUS INTERSECTIONS IN THE US</p>
  </Carousel.Caption>
  </Carousel.Item>
</Carousel>
  );
};

export default Slider;
