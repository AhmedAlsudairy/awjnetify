// Imports
import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

// Static Files
app.use(express.static('public'));

// Set View's
app.set('views', './views');
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended:true}));

// Navigation
app.get('/', (req, res) => {
    res.render("index.ejs");
});
app.get('/login', (req, res) => {
    res.render("login.ejs");
});
app.get('/home', (req, res) => {
    res.render("home.ejs");
});
app.get('/register', (req, res) => {
    res.render("register.ejs");
});
app.get('/home', (req, res) => {
    res.render("home.ejs");
});
app.get('/institution', (req, res) => {
    res.render("institution.ejs");
});
app.get('/instEx', (req, res) => {
    res.render("instEx.ejs");
});
app.get('/FAQs', (req, res) => {
    res.render("FAQs.ejs");
});
app.get('/myprofile', (req, res) => {
    res.render("myprofile.ejs");
});
app.get('/mycert', (req, res) => {
    res.render("mycert.ejs");
});
app.get('/cv', (req, res) => {
    res.render("mycv.ejs");
});
app.get('/certificate', (req, res) => {
    res.render("certificate.ejs");
});
app.get('/certEx', (req, res) => {
    res.render("certEx.ejs");
});
app.listen(port, () => console.info(`App listening on port ${port}`));