const express = require("express");

const server = express();

server.use(express.json());

const projects = [
  {
    id: "1",
    title: "Novo projeto",
    tasks: []
  }
];

// Middlewares
function checkProjectExists(req, res, next) {
  const { id } = req.params;

  const projectFiltered = projects.find(project => project.id === id);

  if (!projectFiltered) {
    return res.status(400).json("Project does not exists");
  }

  req.projectFiltered = projectFiltered;

  return next();
}

// Routes
server.get("/projects", (req, res) => {
  return res.json(projects);
});

server.get("/projects/:id", checkProjectExists, (req, res) => {
  return res.json(req.projectFiltered);
});

server.post("/projects", (req, res) => {
  projects.push(req.body);

  return res.json(projects);
});

server.put("/projects/:id", checkProjectExists, (req, res) => {
  const { title } = req.body;

  req.projectFiltered.title = title;

  return res.json(req.projectFiltered);
});

server.delete("/projects/:id", checkProjectExists, (req, res) => {
  const { id } = req.params;

  const projectIndex = projects.findIndex(project => project.id === id);

  projects.splice(projectIndex, 1);

  return res.send();
});

server.post("/projects/:id/tasks", checkProjectExists, (req, res) => {
  const { title } = req.body;

  req.projectFiltered.tasks.push(title);

  return res.json(req.projectFiltered);
});

server.listen(3000);
