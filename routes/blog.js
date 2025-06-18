import express from 'express';
import bodyParser from "body-parser";

const router = express.Router();
let array = [];

router.use(bodyParser.urlencoded({ extended: true }));

// Example route handler, update as needed
router.get('/', (req, res) => {
  res.render('blog.ejs', {
    intro_bkg: "primary-background",
    currentPage: "blog"
  });
});

router.get("/business-management", (req, res) => {
    res.render("blog/business-management.ejs", {
        intro_bkg: "primary-background",
        currentPage: "blog"
    });
});

router.get("/productivity-technology", (req, res) => {
    res.send("Coming soon");
    // res.render("blog/productivity-technology.ejs", {
    //     intro_bkg: "primary-background",
    //     currentPage: "blog"
    // });
});

router.get("/philosophy-life", (req, res) => {
    res.send("Coming soon");
    // res.render("blog/philosophy-life.ejs", {
    //     intro_bkg: "primary-background",
    //     currentPage: "blog"
    // });
});

router.get("/miscellaneous", (req, res) => {
    res.send("Coming soon");
    // res.render("blog/miscellaneous.ejs", {
    //     intro_bkg: "primary-background",
    //     currentPage: "blog"
    // });
});

router.post("/business-management/process-comments", (req, res) => {
    const { firstName, lastName, comment } = req.body;

    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
    console.log("Comment:", comment);

    array.push([firstName, lastName, comment]);

    // You can process/store the data here
    res.render("blog/business-management.ejs", {
        intro_bkg: "primary-background",
        currentPage: "blog",
        array: array
    });
});

export default router;