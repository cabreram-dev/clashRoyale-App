const express = require("express");
const cors = require("cors");
const axios = require("axios");
const PORT = process.env.PORT || 3001;
const app = express();

let clashApiUrl = 'https://api.clashroyale.com/v1/cards';
let token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjZlYjkwMmIwLTU3MDItNDY2Mi05N2QzLTMxNjhlNjJlYWIzYSIsImlhdCI6MTY4NzIwNzY5Miwic3ViIjoiZGV2ZWxvcGVyLzZmMTBkZTMwLTBlNjUtODMzNS0wZmQ0LTRmZjZkMWRiZWU0MCIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyIxODEuMzcuMTMyLjEyNiJdLCJ0eXBlIjoiY2xpZW50In1dfQ.TnFkVs-mqdWuDjn6J5S2b9WibTuibNSziyQ6wWYfxcUl0ayu0hf8YdcfqY2fPsazGX9tCyc1fOyXOqYmg-uZBw'

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
