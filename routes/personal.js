import express from 'express';
import bodyParser from 'body-parser';

const router = express.Router();

router.use(bodyParser.urlencoded({ extended: true }));

router.get("/anime", (req, res) => {
    res.render("personal/anime.ejs", {
        intro_bkg: "primary-background",
        currentPage: "personal"
    });
});

router.get("/books", (req, res) => {
    res.send("Coming soon");
    // res.render("personal/books.ejs", {
    //     intro_bkg: "primary-background",
    //     currentPage: "personal"
    // });
}
);

router.get("/movies", (req, res) => {
    res.send("Coming soon");
    // res.render("personal/movies.ejs", {
    //     intro_bkg: "primary-background",
    //     currentPage: "personal"
    // });
}
);

router.get("/tvshows", (req, res) => {
    res.send("Coming soon");
    // res.render("personal/tvshows.ejs", {
    //     intro_bkg: "primary-background",
    //     currentPage: "personal"
    // });
}
);

router.get("/games", (req, res) => {
    res.send("Coming soon");
    // res.render("personal/games.ejs", {
    //     intro_bkg: "primary-background",
    //     currentPage: "personal"
    // });
}
);

export default router;
