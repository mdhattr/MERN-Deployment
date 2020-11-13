const mongoose = require("mongoose");

const PetSchema = new mongoose.Schema({
    name: {
        type: String,
        minLength: [3, "Name must be at least 3 characters"],
		required: [true, "A pet needs a name."],
		
	},
	type: {
		type: String,
		required: [true, "A pet needs a type."],
        minLength: [3, "Pet type must be at least 3 characters"]
    },
    description: {
		type: String,
		required: [true, "A pet needs a description."],
        minLength: [3, "Pet description must be at least 3 characters"]
    },
    skillOne: {
        type: String,
        default: ""
    },
    skillTwo: {
        type: String,
        default: ""
    },
    skillThree: {
        type: String,
        default: ""
	},
},
	{timestamps: true}
);

const Pet = mongoose.model("Pet", PetSchema);

module.exports = Pet;