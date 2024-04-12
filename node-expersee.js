const express = require("express");

const app = express();
app.use(express.json())
const courses = [
    {id:1, name:"course1"},
    {id:2, name:"course2"},
    {id:3, name:"course3"},
    {id:4, name:"course4"},
];

app.get("/", (req, res) => {
  res.send("Hello worled");
});
app.get("/api/coures", (req, res) => {
  res.send(courses);
});
app.get("/api/coures/:id", (req, res) => {
    const resualt = courses.find(c=>c.id === parseInt(req.params.id))
    if(!resualt) res.status(404).send('The coures with the given ID is was not found')
    res.send(resualt)
  });

app.post('/api/coureses/', (req, res) =>{
    const corse = {
        id:courses.length + 1,
        name: req.body.name
    };
    courses.push(corse);
    res.send(corse)
})


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listing on port ${port} ..`));

 