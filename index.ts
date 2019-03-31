import express from "express";
import http from "http";
import https from "https";
import fs from "fs";

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
httpServer.listen(80, () => {
  console.log("HTTP Server running on port 80");
});

let prodaction = false;

if (prodaction) {
  let privateKey, certificate, ca;
  privateKey = fs.readFileSync(
    "/etc/letsencrypt/live/votingpay.com/privkey.pem",
    "utf8"
  );
  certificate = fs.readFileSync(
    "/etc/letsencrypt/live/votingpay.com/cert.pem",
    "utf8"
  );
  ca = fs.readFileSync("/etc/letsencrypt/live/votingpay.com/chain.pem", "utf8");
  const credentials = {
    key: privateKey,
    cert: certificate,
    ca: ca
  };
  const httpsServer = https.createServer(credentials, app);
  httpsServer.listen(443, () => {
    console.log("HTTPS Server running on port 443");
  });
}
