const mongoose = require('mongoose');
const schema = mongoose.Schema;


const TeacherSchema = new schema({

	name: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	email_verified_at: Date,
	password: String,
	image: String,
	phone: String,
	address: String,
	category: {
		type: String,
		enum: [ 'permanent','temporary','visitor','volunteer']
	},
	timing: {
		type: String,
		enum: [ 'part time','full time']
	}

},{
	timestamps:true

})

const TeacherModel = mongoose.model('teacher',TeacherSchema);
module.exports = TeacherModel;


