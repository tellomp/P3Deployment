# Dangerous Intersections

### Overview
* In a recent survey conducted by the US National Highway Traffic Safety Administration (NHTSA), poor road designs account for more than 23 percent of annual traffic deaths in the country. 


![alt text][slider]

[slider]: https://github.com/tellomp/P3Deployment/blob/master/client/public/slider.1png.png "Slider"


* With this finding, experts estimated that dangerous roads kill at least 8,000 people every year. 

* According to NHTSA, the most dangerous road design involves intersections with inadequate signs, blind spots, and confusing lanes which accounted for two-thirds of all fatal crashes caused by hazardous roads.

* Because intersections are always involved in accidents, road safety experts and traffic engineers have conducted several studies to determine what improvements should be done. 

* This app is our way to spread knowledge and bring it to everyday drivers that can add their known dangerous intersections in their area. 


![alt text][slider2]

[slider2]: https://github.com/tellomp/P3Deployment/blob/master/client/public/slider2.png "Slider 2"


* We want to use this vital knowledge and build a database with as many as possible dangerous intersections. 


![alt text][slider3]

[slider3]: https://github.com/tellomp/P3Deployment/blob/master/client/public/slider3.png "Slider 3"

### Instructions

* Using mongoDB, the user is able to add a dangerous intersection to the database.



![alt text][logo]

[logo]: https://github.com/tellomp/P3Deployment/blob/master/client/public/intersectionInput.png "Add Exact Address"


* If the user knows the exact address for the dangerous intersection, the user can input the address and it is added to the database.

* Users can then click on the desired intersection and the user is routed to the details page using axios and the map renders the address using the Google maps API.  


![alt text][pin]

[pin]: https://github.com/tellomp/P3Deployment/blob/master/client/public/pinDrop.png "Drop Pin"


* If the user does not know the exact address, the user is able to drag the pin and drop it on the map.

* Dropping the pin autofills the form section and adds it to the database using mongoDB.



![alt text][finder]

[finder]: https://github.com/tellomp/P3Deployment/blob/master/client/public/areaFinder.png "Area Finder"


* Using Google autocomplete, the user is able to search for the general area for the intersection. Making it easier to find the dangerous intersection and adding it to the database. 

* All users are then able to view all dangerous intersections added to the dangerous intersections database. 


### Live App
* Click on the link to add and view dangerous intersections in your area! 

### Technologies
* MERN Stack
* JavaScript ES6
* Axios
* Express
* React Bootstrap
* CSS
* Google API
* Geocode API
* Google autocomplete
* yarn
* body-parser


