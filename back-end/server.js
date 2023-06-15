const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();
const cors = require("cors");
const axios = require("axios");

axios
  .get("https://api.clashroyale.com/v1/cards", {
    headers: {
      'authorization': `eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjA2OTY5MDk5LTYyNWItNDFlMi1hNmRiLTg1MDliNGYzZWNjNyIsImlhdCI6MTY4Njg2MTU4NSwic3ViIjoiZGV2ZWxvcGVyLzZmMTBkZTMwLTBlNjUtODMzNS0wZmQ0LTRmZjZkMWRiZWU0MCIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyI4LjguOC44Il0sInR5cGUiOiJjbGllbnQifV19.rVYWSaTXRUOokHk2zSAxo5FZgY_ov5TUWupKg6UpGbd2iVK7IgdacvWa0EoScekMjzFeycGffzViFufSJ6FB8w`,
    },
  })
  .then((res) => res.json())
  .then(data => console.log(data))
  .catch((error) => {
    console.log(error.message);
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
  res.json({ message: "Hello from server!" });
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
