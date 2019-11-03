const mongoose = require('mongoose');
const schema = mongoose.Schema;


const SectionSchema = new schema({

	section_name: {
		type: String,
		required: true
	}
},{
	timestamps:true

})

const SectionModel = mongoose.model('batch',SectionSchema);
module.exports = SectionModel;


