var friends = require("app/data/friends.js");

module.exports = function (app) {

  app.get("/api/:tables?", function(req, res) {
    return res.json(friends);
  })
  console.log(app);
}
