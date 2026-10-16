const express = require("express");
const path = require("path");
const app = express();

const PORT = 3000;

// Configure EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Load CSS, JavaScript, and images
app.use(express.static(path.join(__dirname, "public")));

// Display homepage
app.get("/", (req, res) => {
    res.render("index");
});

/* Display About page */
app.get("/about", (req, res) => {
    res.render("about");
});

// Temporary placeholder pages
const placeholderPages = [
    { path: "/discover", title: "Discover Projects" },
    { path: "/contact", title: "Contact" },
    { path: "/login", title: "Login" },
    { path: "/signup", title: "Sign Up" },
    { path: "/tracker", title: "My Tracker" },
    { path: "/saved", title: "Saved Projects" },
    { path: "/profile", title: "My Profile" }
];

placeholderPages.forEach((page) => {
    app.get(page.path, (req, res) => {
        res.render("placeholder", { title: page.title });
    });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
