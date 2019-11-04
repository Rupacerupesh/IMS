const mongoose = require('mongoose');
const schema = mongoose.Schema;


const StudentCategorySchema = new schema({

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

const StudentCategoryModel = mongoose.model('studentcategory',StudentCategorySchema);
module.exports = StudentCategoryModel;


