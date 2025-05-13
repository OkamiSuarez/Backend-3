import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send("repaso de docker");
});

app.listen(8080,()=> console.log('escuchando en el 8080'))