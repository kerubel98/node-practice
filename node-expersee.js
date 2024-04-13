const express = require("express");
const Joi = require("joi");
const logger = require('./loger.js')


const courses = [
  { id: 1, name: "course1" },
  { id: 2, name: "course2" },
  { id: 3, name: "course3" },
  { id: 4, name: "course4" },
];

const app = express();
app.use(express.json());


app.use(logger.loger)
app.use(logger.auth)

app.get("/", (req, res) => {
  res.send("Hello worled");
});
app.get("/api/coures", (req, res) => {
  res.send(courses);
});
app.get("/api/coures/:id", (req, res) => {
  const resualt = courses.find((c) => c.id === parseInt(req.params.id));
  if (!resualt)
    res.status(404).send("The coures with the given ID is was not found");
  res.send(resualt);
});

app.post("/api/coureses/", (req, res) => {
  const corse = {
    id: courses.length + 1,
    name: req.body.name,
  };
  const { error } = validation(corse);
  if (error) {
    res.status(404).send(error.message);
    return;
  }

  courses.push(corse);
  res.send(corse);
});

app.put("/api/courses/:id", (req, res) => {
  const course = courses.filter((c) => c.id === parseInt(req.params.id));
  if (!course) {
    res.status(404).send("No corse with the given id");
    return;
  }

  const { error, value } = validation({
    id: parseInt(req.params.id),
    name: req.body.name,
  });
  if (error) {
    res.status(404).send(error);
    return;
  }
  course.name = value.name;
  res.send(course);
});

app.delete('api/courses/:id', (req, res)=>{
    const course = courses.find(c=>c.id === parseInt(req.params.id))
    if(!course){
        res.status(404).send('No course with the given ID is found')
        return
    }
    const newcors = courses.filter(c=>c.id !== parseInt(req.params.id))
    courses = newcors;
    res.send(course)
})


function validation(corse) {
  const schema = Joi.object({
    id: Joi.number(),
    name: Joi.string().min(3).required(),
  });

  return schema.validate(corse);
}

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listing on port ${port} ..`));
