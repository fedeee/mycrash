var london = require('../config/london-coordinates');
var Location = require('mongoose').model("Location");


function geoIntersect(coordinates){ // [long,lat]

  Location.find({loc: { $geoWithin: { $centerSphere: [ [-0.090865400,51.475561], 0.1/3963.2 ]}}}, function(error, data){
      data.forEach( function(d){
       console.log("id matched:",d.userid,d.loc.coordinates)
     })
      return data;
  })
};





module.exports = geoIntersect;
