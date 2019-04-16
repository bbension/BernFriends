//Let us load the data by linking our routes to a series of "data" sources
//The line below uses the data source path/friends to extract the data from the js file
var friends = require("../data/friends");

//Routing for the api routes

module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  app.post("/api/friends", function(req, res) {
    var totalDifference = 100;
    var currDifference = 0;
    var bestMatch;

    for (var i = 0; i < friends.length; i++) {
      for (var j = 0; j < 10; j++) {
        currDifference += Math.abs(req.body.scores[j] - friends[i].scores[j]);
      }
      console.log(i + " " + currDifference);
      if (currDifference < totalDifference) {
        totalDifference = currDifference;
        bestMatch = friends[i];
      }
      currDifference = 0;
    }
    friends.push(req.body);
    res.json(bestMatch);
  });
};
