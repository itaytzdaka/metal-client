const express = require("express");
// const cors = require("cors");
const path = require("path");

const server = express();

server.use(express.static(path.join(__dirname, "./dist/")));
server.use("*", (request, response) => {
    response.sendFile(path.join(__dirname, "./dist/index.html"));
});

const port = process.env.PORT || 3000;
server.listen(port, () => console.log("Listening on port "+ port));
