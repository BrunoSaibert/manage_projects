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

server.get("/projects", (req, res) => {
  return res.json(projects);
});

server.get("/projects/:id", (req, res) => {
  const { id } = req.params;

  const projectFiltered = projects.find(project => project.id === id);

  return res.json(projectFiltered);
});

server.post("/projects", (req, res) => {
  projects.push(req.body);

  return res.json(projects);
});

server.put("/projects/:id", (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  const projectFiltered = projects.find(project => project.id === id);

  projectFiltered.title = title;

  return res.json(projectFiltered);
});

server.delete("/projects/:id", (req, res) => {
  const { id } = req.params;

  const projectIndex = projects.findIndex(project => project.id === id);

  projects.splice(projectIndex, 1);

  return res.send();
});

server.post("/projects/:id/tasks", (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  const projectFiltered = projects.find(project => project.id === id);
  projectFiltered.tasks.push(title);

  return res.json(projectFiltered);
});

server.listen(3000);
