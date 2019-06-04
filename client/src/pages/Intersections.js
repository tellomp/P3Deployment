import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, FormBtn } from "../components/Form";
import Map from "../components/Map/Map";

class Intersections extends Component {
  state = {
    intersections: [],
    address: "",
    city: "",
    State: "",
  };

  componentDidMount() {
    this.loadIntersections();
  }

  loadIntersections = () => {
    API.getIntersections()
      .then(res => {
        this.setState({ intersections: res.data, address: "", city: "", State: ""})
        console.log("Res");
        console.log(res)
      }
      )
      .catch(err => console.log(err));
  };

  deleteIntersection = id => {
    API.deleteIntersection(id)
      .then(res => this.loadIntersections())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.address && this.state.city && this.state.State) {
      API.saveIntersection({
        address: this.state.address,
        city: this.state.city,
        State: this.state.State,
      })
        .then(res => this.loadIntersections())
        .catch(err => console.log(err));
    }
  };

  handleFullAddressUpdate = (address, city, State) => {
    this.setState({
      address: address,
      city: city,
      State: State
    })
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <p className="lead ll">Know the exact address? Add your dangerous intersection</p>
            </Jumbotron>
            <form>
              <Input
                value={this.state.address}
                onChange={this.handleInputChange}
                name="address"
                placeholder="address (required)"
              />
              <Input
                value={this.state.city}
                onChange={this.handleInputChange}
                name="city"
                placeholder="city (required)"
              />
              <Input
                value={this.state.State}
                onChange={this.handleInputChange}
                name="State"
                placeholder="State (required)"
              />
              <FormBtn
                disabled={!(this.state.city && this.state.address)}
                onClick={this.handleFormSubmit}
              >
                <p className="lead btxt"> Submit Intersection</p>
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <p className="lead ll">Dangerous Intersections List</p>
            </Jumbotron>
            {this.state.intersections.length ? (
              <List>
                {this.state.intersections.map(intersection => (
                  <ListItem key={intersection._id}>
                    <Link to={"/intersections/" + intersection._id}>
                      <strong>
                        {intersection.address}, {intersection.city}
                      </strong>
                    </Link>
                  </ListItem>
                ))}
              </List>
            ) : (
                <h1 className="display-4 ptxt">No Results to Display</h1>
            )}
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
            <div style = {{marginLeft: '10%' , width:'100%', textAlign:'center', marginTop: "50px"}}>
              <h1 className="display-4 ptxt">Drag and drop the pin to add your intersection</h1>
            </div>
              <div style={{ marginLeft: '10%' , width:'100%', marginBottom: '200px', marginTop:'50px', border:"2px #2d4552 solid"}}>
                <Map
                    page = "landing"
                    google={this.props.google}
                    center={{ lat: 38.9095559, lng: -77.0430325 }}
                    height='400px'
                    
                    
                    zoom={15}
                    handleFullAddressUpdate= {this.handleFullAddressUpdate}
                />
             </div>
            
            </article>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Intersections;

