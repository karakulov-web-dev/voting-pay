import express from "express";
import http from "http";
import https from "https";
import fs from "fs";

const app = express();

app.use("/", express.static(__dirname + "/public"));

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
