const express = require("express");
const app = express();
const path = require("path");
var cors = require("cors");
const bodyParser = require("body-parser");
const nocache = require("nocache");

app.use(nocache());
app.use(bodyParser.text());
app.use(cors());

app.set("etag", false);

var users = new Map();

app.get("/:user", (req, res) => {
  if (!users.has(`${req.params.user}`)) {
    res.status(200).json({ data: "User does not exist" });
  } else {
    var likedGifsString = `${users.get(req.params.user).likedGifs}`;
    res.status(200).json({ data: Array.from(likedGifsString.split(",")) });
  }
});

app.post("/:user", (req, res) => {
  if (!users.has(`${req.params.user}`)) {
    users.set(`${req.params.user}`, { userID: "", likedGifs: [] });
  }
  res.end();
  if (
    typeof req.body === "string" &&
    !users.get(`${req.params.user}`).likedGifs.includes(req.body)
  ) {
    users.get(`${req.params.user}`).likedGifs.push(req.body);
    res.end();
  } else {
    res.end();
  }
});

app.delete("/:user/gifs/:gifid", (req, res) => {
  //console.log(req.params.gifid);
  for (var i = 0; i < users.get(`${req.params.user}`).likedGifs.length; i++) {
    if (
      req.params.gifid
        .toString()
        .localeCompare(users.get(`${req.params.user}`).likedGifs[i]) === 0
    ) {
      users.get(`${req.params.user}`).likedGifs.splice(i, 1);
    }
  }
  var likedGifsString = `${users.get(req.params.user).likedGifs}`;
  res.status(200).json({ data: Array.from(likedGifsString.split(",")) });
});

const PORT = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, "public")));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
