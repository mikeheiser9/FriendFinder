var friends = require("../data/friends.js");

module.exports = function (app) {

  app.post("/api/:friends", function(req, res) {
    //find match
    var match = 3;
    console.log(match);

    // for (i=0; i < friends.length; i++) {
    //  match = math.floor(math.random) * friends.length;
    // }
    console.log(friends[match].photo);
    return res.json(friends[match]);
  })
  // console.log(app);
}

