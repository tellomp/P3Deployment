import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import Map from "../components/Map/Map";


class Detail extends Component {
  state = {
    intersection: {}
  };
  // When this component mounts, grab the book with the _id of this.props.match.params.id
  // e.g. localhost:3000/intersections/599dcb67f0f16317844583fc
  componentDidMount() {
    API.getIntersection(this.props.match.params.id)
      .then(res => this.setState({ intersection: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1  style = {{fontFamily: "Karla", padding:"15px",color:"#b7710f"}}>
                {this.state.intersection.address + ' ,' +  ' ' + this.state.intersection.city + ' ,'  + ' ' +this.state.intersection.State}
              </h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <article>
              
              <div style={{ margin: '100px',fontFamily: "Karla",color:"#b7710f"}}>
         
                <Map 
                    page = "detail"
                    google={this.props.google}
                    intersection={this.state.intersection.address + ' ' + this.state.intersection.city + ' ' + this.state.intersection.State}
                    address={this.state.intersection.address}
                    city={this.state.intersection.city}
                    state={this.state.intersection.State}
                    center={{ lat: 38.9095559, lng: -77.0430325 }}
                    height='300px'
                    zoom={15}
                  />
              
             </div>
            
            </article>
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
          
            <Link to="/">
            <div style = {{color: '#2d4552'}}>← Back to Dangerous Intersections List</div></Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Detail;
