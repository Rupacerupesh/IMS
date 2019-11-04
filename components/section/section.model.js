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

const SectionModel = mongoose.model('section',SectionSchema);
module.exports = SectionModel;


