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

/* Display Discover page */
app.get("/discover", (req, res) => {
    const projects = Object.entries(sampleProjects).map(([slug, project]) => ({
        ...project,
        slug
    }));

    res.render("discover", { projects });
}); 

/* Display About page */
app.get("/about", (req, res) => {
    res.render("about");
});

// Temporary placeholder pages
const placeholderPages = [
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

const sampleProjects = {
    "strawberry-plushie": {
        title: "Strawberry Plushie",
        image: "/images/coming-soon.jpg",
        description: "Create an adorable strawberry plushie using basic crochet stitches. Perfect for beginners learning amigurumi.",
        difficulty: "Beginner",
        materials: ["Stuffing", "Yarn needle", "Stitch marker", "Scissors"],
        yarn: "Medium-weight cotton yarn in red and green",
        hook: "3.5 mm",
        instructions: [
            "Crochet the strawberry body using rounds of single crochet.",
            "Gradually increase and decrease stitches to form the strawberry shape.",
            "Add stuffing before closing the body.",
            "Crochet green leaves and attach them to the top.",
            "Weave in the remaining yarn ends."
        ]
    },

    "sunflower-tote-bag": {
        title: "Sunflower Tote Bag",
        image: "/images/coming-soon.jpg",
        description: "Make a reusable tote bag featuring colorful sunflower granny squares. A practical accessory for everyday use.",
        difficulty: "Intermediate",
        materials: ["Yarn needle", "Stitch markers", "Scissors"],
        yarn: "Medium-weight cotton yarn in brown, yellow, and a background color",
        hook: "4.0 mm",
        instructions: [
            "Crochet the centers of the sunflower granny squares.",
            "Add yellow petals around each center.",
            "Complete the outer rounds of each square.",
            "Join the squares to create the front and back panels.",
            "Join the panels and crochet handles.",
            "Weave in loose ends."
        ]
    },

    "crochet-bucket-hat": {
        title: "Crochet Bucket Hat",
        image: "/images/coming-soon.jpg",
        description: "Crochet a stylish bucket hat using simple stitches. Customize it with your favorite yarn colors.",
        difficulty: "Beginner",
        materials: ["Stitch marker", "Yarn needle", "Scissors"],
        yarn: "Medium-weight cotton yarn",
        hook: "5.0 mm",
        instructions: [
            "Begin with a circular crown.",
            "Increase stitches until the crown reaches the desired size.",
            "Crochet even rounds to form the sides.",
            "Increase stitches to create the brim.",
            "Finish the edge and weave in loose ends."
        ]
    },

    "daisy-granny-square-blanket": {
        title: "Daisy Granny Square Blanket",
        image: "/images/coming-soon.jpg",
        description: "Create a cozy blanket by joining individual daisy granny squares. A relaxing project that builds your crochet skills.",
        difficulty: "Expert",
        materials: ["Yarn needle", "Scissors", "Stitch markers"],
        yarn: "Medium-weight yarn in your preferred colors",
        hook: "5.0 mm",
        instructions: [
            "Crochet the center of each daisy.",
            "Create petals around each center.",
            "Work the outer rounds to form granny squares.",
            "Repeat until you have enough squares for your blanket.",
            "Join the squares together.",
            "Add a border and weave in loose ends."
        ]
    }
};

app.get("/projects/:slug", (req, res) => {
    const project = sampleProjects[req.params.slug];

    if (!project) {
        return res.status(404).render("project-details", {
            project: null,
            isLoggedIn: false
        });
    }

    res.render("project-details", {
        project,
        isLoggedIn: Boolean(req.session?.userId)
    });
});

app.get("/projects/:slug", (req, res) => {
    const project = sampleProjects[req.params.slug];

    if (!project) {
        return res.status(404).send("Project not found.");
    }

    res.render("project-details", { project });
});