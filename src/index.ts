import express from 'express';
require("dotenv").config()
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());


app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});

app.get("/movies", (req, res) => {
    fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}`
    )
        .then((response) => response.json())
        .then((data) => {
            res.json({ movies: data.results });
            console.log(data);
        });
});