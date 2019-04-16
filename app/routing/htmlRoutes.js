//Depedencies - we use path to get the correct path for our html documents
var path = require("path");

//Routing to our html pages

module.exports = function(app) {
  //The code below is our HTML GET requests, it handles when a user "visits" a specific page on our server
  //This tells our sever that when you GET a specific url request, load the related html doucment.

  //The following get request displays the survey.html
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });

  //The following get request displays the home.html content when the path is path/* any unspecified url
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
};
