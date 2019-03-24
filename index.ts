import express from "express";
const app = express();

app.use("/", express.static(__dirname + "/public"));
app.listen(80, function() {
  console.log("Example app listening on port 80!");
});
