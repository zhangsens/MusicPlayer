//const fs = require("fs");
//const http = require("http");
const express = require("express");
const app = express();

app.set("view engine", "jade");
app.set("views", __dirname + "/views");
app.set("view option", { layout: false });

app.use("/audio", express.static(__dirname + "/audio"));
app.use("/static", express.static(__dirname + "/src"));

app.get("/", function(req, res) {
    res.render("Musical-player");
});

// app.get("/music", function(err) {
//     http.get("http://116.224.86.38/m10.music.126.net/20170629142854/68454cace4df00c06e7b228e484ab4a9/ymusic/efe1/17f6/50f8/48021f22535ffbc644d44a21a432729b.mp3", function(res) {
//         var data = "";
//         res.on("data", function(chunk) {
//             data += chunk;
//         });
//         res.on("end", function(res) {
//             fs.writeFile("./11.mp3", data, "binary", function() {});
//         });
//     });
// })

app.listen({ port: 8000 });