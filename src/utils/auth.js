const config = require("../../config");
const fetch = require("node-fetch");

const API = "https://accounts.spotify.com/api/token";
const credentials = new Buffer.from(
  config.clientId + ":" + config.clientSecret
).toString("base64");

const getToken = async () => {
  const headers = {
    Authorization: `Basic ${credentials}`,
    "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
  };

  const response = await fetch(API, {
    method: "POST",
    headers: headers,
    body: new URLSearchParams({ grant_type: "client_credentials" }),
  });

  return await response.json();
};

getToken()
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
