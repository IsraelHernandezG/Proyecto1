const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Shark = new Schema ({
        name: { type: String, required: true },
        character: { type: String, required: true },
	type: { type: String, required: false },
});

module.exports = mongoose.model('Shark', Shark)
