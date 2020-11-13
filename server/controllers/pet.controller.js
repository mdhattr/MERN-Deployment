const Pet = require("../models/pet.model");

module.exports = {
    index: (req, res) => {
        Pet.find()
            .then(data => res.json({ results: data }))
            .catch(err => res.json(err.errors));
    },
    create: (req, res) => {
        Pet.create(req.body)
            .then(data => res.json({ results: data }))
            .catch(err => res.json(err.errors));
    },
    show: (req, res) => {
        Pet.findOne({ _id: req.params.id })
            .then(data => res.json({ results: data }))
            .catch(err => res.json(err.errors));
    },
    update: (req, res) => {
        Pet.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
            .then(data => res.json({ results: data }))
            .catch(err => res.json(err.errors));
    },
    destroy: (req, res) => {
        Pet.deleteOne({ _id: req.params.id })
            .then(result => res.json({ results: result }))
            .catch(err => res.json(err.errors));
    },
    sorted: (req, res) =>{
        Pet.aggregate([{ $sort: { type: -1} }])
            .then(result => res.json({ results: result }))
            .catch(err => res.json(err.errors));
    }
}
