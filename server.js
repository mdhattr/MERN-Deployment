const express = require("express");
    app = express(),
    port = 8000,
    cors = require('cors'),
    server = app.listen(port, () => console.log(`Listening on port ${port}`));

app.use(cors());
app.use(express.json(), express.urlencoded({ extended: true }));

// This will fire our mongoose.connect statement to initialize our database connection
require("./server/config/mongoose.config");

// This is where we import the users routes function from our user.routes.js file
const AllMyPetRoutes = require("./server/routes/pet.routes");
AllMyPetRoutes(app);