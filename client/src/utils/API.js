import axios from "axios";

export default {
  // Gets all intersections
  getIntersections: function() {
    console.log("getIntersections")
    return axios.get("/api/intersections");
  },
  // Gets the intersection with the given id
  getIntersection: function(id) {
    return axios.get("/api/intersections/" + id);
  },
  
  // Saves a intersection to the database
  saveIntersection: function(intersectionData) {
    console.log("saveIntersection")
    console.log(intersectionData)
    return axios.post("/api/intersections", intersectionData);
  }
};
