import express from "express";
import bodyParser from "body-parser";
import blogRouter from './routes/blog.js';
import cvRouter from './routes/cv.js';
// import projectRouter from './routes/projects.js';
import personalRouter from './routes/personal.js';

const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index.ejs", {
    intro_bkg: "slash-background",
    currentPage: "home",
  });
});

// Use routers
app.use('/blog', blogRouter);
app.use('/cv', cvRouter);
// app.use('/projects', projectRouter);
app.use('/personal', personalRouter);