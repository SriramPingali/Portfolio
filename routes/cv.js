import express from 'express';
import bodyParser from "body-parser";

const router = express.Router();
let array = [];

router.use(bodyParser.urlencoded({ extended: true }));

// Example route handler, update as needed
router.get('/', (req, res) => {
  res.render('cv.ejs', {
    intro_bkg: "primary-background",
    currentPage: "cv"
  });
});

export default router;