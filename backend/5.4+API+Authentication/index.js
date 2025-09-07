import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com/";

//TODO 1: Fill in your values for the 3 types of auth.
const yourUsername = "Dhruv";
const yourPassword = "Anchan";
const yourAPIKey = "e8ec3df9-4a92-4a26-90d6-1c75e4f4a2b2";
const yourBearerToken = "f1ca51cd-4881-4485-b62b-2850c94a03ef";

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
});

app.get("/noAuth", async(req, res) => {
  try {
    const response = await axios.get(API_URL + "random");
    console.log(response);
    res.render("index.ejs", { content: response.data});
  } catch (error) {
    res.status(404).send(error.message);
  }
});

app.get("/basicAuth", async(req, res) => {
  //TODO 3: Write your code here to hit up the /all endpoint
  //Specify that you only want the secrets from page 2
  //HINT: This is how you can use axios to do basic auth:
  // https://stackoverflow.com/a/74632908

  //axios.post("https://secrets-api.appbrewery.com/register")
  try{
    const response = await axios.get(API_URL+"all?page=2", {
      auth: {
        username: yourUsername,
        password: yourPassword,
      },
    });
    console.log(response.data);
    res.render("index.ejs",{content: response.data[Math.floor(Math.random()*response.data.length)]});
  } catch(error){
    console.log(error.message);
    res.status(404).send(error.message);
  }
});

app.get("/apiKey", async(req, res) => {
  //TODO 4: Write your code here to hit up the /filter endpoint
  //Filter for all secrets with an embarassment score of 5 or greater
  //HINT: You need to provide a query parameter of apiKey in the request.
  try{
    const response = await axios.get(
      `${API_URL}filter?score=5&apiKey=${yourAPIKey}`
    )
    res.render("index.ejs", {content: response.data[Math.floor(Math.random()*response.data.length)]})
  }catch(error){
    res.status(404).send(error.message);
  }
});

const config = {
  headers: { 
      Authorization: `Bearer ${yourBearerToken}`,
    },
  };

app.get("/bearerToken", async(req, res) => {
  //TODO 5: Write your code here to hit up the /secrets/{id} endpoint
  //and get the secret with id of 42
  //HINT: This is how you can use axios to do bearer token auth:
  // https://stackoverflow.com/a/52645402
  try{
  const response = await axios.get(API_URL+"secrets/42", config);
  console.log(response);
  res.render("index.ejs",{content: response.data});
  }catch(error){
    console.log(error.message);
    res.status(404).send(error.message);
  }

});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
