const PetController = require("../controllers/pet.controller");

module.exports = app => {
    app.get("/api/pets/", PetController.index);
    app.post("/api/create/pet", PetController.create);
    app.get("/api/pet/:id", PetController.show);
    app.put("/api/update/pet/:id", PetController.update);
    app.delete("/api/destroy/pet/:id", PetController.destroy);
    app.get("/api/pets/sorted", PetController.sorted);
};