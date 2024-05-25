import express from "express";
import serverless from "serverless-http";
import bodyParser from "body-parser";

const app = express();
const router = express.Router();

// Static Files
app.use(express.static('public'));

// Set View's
app.set('views', `${process.cwd()}/views`);
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

// Navigation
router.get('/', (req, res) => {
  res.render("index.ejs");
});

router.get('/login', (req, res) => {
  res.render("login.ejs");
});

router.get('/home', (req, res) => {
  res.render("home.ejs");
});

router.get('/register', (req, res) => {
  res.render("register.ejs");
});

router.get('/institution', (req, res) => {
  res.render("institution.ejs");
});

router.get('/instEx', (req, res) => {
  res.render("instEx.ejs");
});

router.get('/FAQs', (req, res) => {
  res.render("FAQs.ejs");
});

router.get('/myprofile', (req, res) => {
  res.render("myprofile.ejs");
});

router.get('/mycert', (req, res) => {
  res.render("mycert.ejs");
});

router.get('/cv', (req, res) => {
  res.render("mycv.ejs");
});

router.get('/certificate', (req, res) => {
  res.render("certificate.ejs");
});

router.get('/certEx', (req, res) => {
  res.render("certEx.ejs");
});

app.use('/.netlify/functions/server', router);
export const handler = serverless(app);