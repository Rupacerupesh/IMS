const mongoose = require('mongoose');
const schema = mongoose.Schema;


const CourseSchema = new schema({

	name: {
		type: String,
		required: true
	},
	fees: Number,
	duration: String,
	description: String,
	status: Boolean,
	image: String

})

const CourseModel = mongoose.model('course',CourseSchema);
module.exports = CourseModel;


