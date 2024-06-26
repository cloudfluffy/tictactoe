import bodyParser from "body-parser";
import express from "express";

const app = express();
const port = 3000;
let isStartingPage = true;

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));

app.post("/play", function (req, res) {
    isStartingPage = false;
    const config = {
        "isStartingPage": isStartingPage,
        "gamemode": req.body.gamemode,
        "player1turn": req.body.player1turn
    };

    res.render("normal_grid.ejs", config);
});

app.get("/", function (req, res) {
    isStartingPage = true;
    res.render("index.ejs", { "isStartingPage": isStartingPage });
});

app.listen(port, function () {
    console.log(`The server is up and running at port ${port}.`);
});