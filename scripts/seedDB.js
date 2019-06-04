const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Intersections collection and inserts the intersections below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/dangerousintersectionslist"
);

const intersectionSeed = [
  {
    address: "22058-22040 Pacific Blvd",
    city: "sterling",
    State: "VA",
    date: new Date(Date.now())
  },
  {
    "address" : "45385 VA-625",
    "city" : "Sterling",
    "State" : "Virginia",
    date: new Date(Date.now())
},
{
  "address" : "Capital Beltway Inner Loop",
  "city" : "Tysons",
  "State" : "Virginia",
  date: new Date(Date.now())
},
{
  "address" : "1900 Chain Bridge Rd",
  "city" : "Tysons",
  "State" : "Virginia",
  date: new Date(Date.now())
}

];

db.Intersection
  .remove({})
  .then(() => db.Intersection.collection.insertMany(intersectionSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
