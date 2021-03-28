const express = require("express");
const path = require("path");

const STATIC_FOLDER = path.join(__dirname, "static");

const app = express();
const PORT = process.env["PORT"] || 3000;

/* serve the static sketch page */
app.get("/", (req, res) => {
    res.sendFile(path.join(STATIC_FOLDER, "index.html"));
});

app.get("/:file", (req, res) => {
    res.sendFile(path.join(STATIC_FOLDER, req.params.file));
});

app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`)
})