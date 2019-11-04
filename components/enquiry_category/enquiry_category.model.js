const mongoose = require('mongoose');
const schema = mongoose.Schema;


const EnquiryCategorySchema = new schema({

	category_name: {
		type: String,
		required: true
	},
	status:{
		type: Boolean
	}
},{
	timestamps:true

})

const EnquiryCategoryModel = mongoose.model('enquirycategory',EnquiryCategorySchema);
module.exports = EnquiryCategoryModel;


