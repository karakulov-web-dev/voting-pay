import express from "express";
import http from "http";

const app = express();

app.use(express.json());

app.use("/", express.static(__dirname + "/public"));

app.post("/check-access-token", (req, res) => {
  let status;
  if (req.body.AccessToken === "validToken") {
    status = true;
  } else {
    status = false;
  }
  res.send({
    errorStatus: false,
    errorText: "",
    AccessTokenStatus: status
  });
});

app.post("/registration-user", (req, res) => {
  res.send({
    errorStatus: false,
    errorText: "",
    AccessToken: "validToken"
  });
});

app.post("/login-user", (req, res) => {
  let errorStatus = false;
  let errorText = "";
  let AccessToken = "";
  if (req.body.email === "test@votingpay.com" && req.body.password === "1234") {
    errorStatus = false;
    errorText = "";
    AccessToken = "validToken";
  } else {
    errorStatus = true;
    errorText = "Не правильный логин или пароль";
    AccessToken = "";
  }

  res.send({
    errorStatus,
    errorText,
    AccessToken
  });
});

app.get(/./, (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

const httpServer = http.createServer(app);
httpServer.listen(8081, () => {
  console.log("HTTP Server running on port 8081");
});
