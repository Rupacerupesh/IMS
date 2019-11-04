const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const StudentSchema = new Schema({

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
	studentcategory: [{
        type: Schema.Types.ObjectId,
        ref: 'studentcategory'
    }],

	gender: {
		type: String,
		enum: ['Male','Female','Others']

	}


},{
	timestamps:true

})

const StudentModel = mongoose.model('student',StudentSchema);
module.exports = StudentModel;


