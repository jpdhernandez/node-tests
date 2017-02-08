const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.status(404).send({
        error: "Page not found!",
        chicken: "joy"
    });
});

app.get("/users", (req, res) => {
    res.send([{
        name: "Julian",
        age: 20
    }]);
});

app.listen(3000);

module.exports.app = app;