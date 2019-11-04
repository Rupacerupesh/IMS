const mongoose = require('mongoose');
const schema = mongoose.Schema;


const BatchSchema = new schema({

	name: {
		type: String,
		required: true
	},
	year: String,
	month: String
},{
	timestamps:true
})

const BatchModel = mongoose.model('batch',BatchSchema);
module.exports = BatchModel;


