const express = require("express");
const cors = require("cors");
const axios = require("axios");
const PORT = process.env.PORT || 3001;
const app = express();

let clashApiUrl = 'https://api.clashroyale.com/v1/cards';

axios
  .get(clashApiUrl,{
    headers: {
    "Authorization" : `Bearer ${token}`,
     }})
  //.then((res) => res.json())
  .then(data => console.log(data))
  .catch((error) => {console.log(error.message);
  });

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.get('/', function(req, res){
    res.sendFile(__dirname+'/index.html'); // change the path to your index.html
});

app.get("/api", (req, res) => {
  res.json({ message: data });
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
