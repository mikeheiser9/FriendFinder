var friends = require("../data/friends.js");

module.exports = function (app) {

  app.post("/api/:friends", function(req, res) {
    //find match
    var match = 3;
    console.log(match);

    //tried to make a random choice but it broke the app and i ranout of time
    // for (i=0; i < friends.length; i++) {
    //  match = math.floor(math.random) * friends.length;
    // }
    console.log(friends[match].photo);
    return res.json(friends[match]);
  })
  // console.log(app);
}

