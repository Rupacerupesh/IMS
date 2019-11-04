const mongoose = require('mongoose');
const schema = mongoose.Schema;


const EnquiriesSchema = new schema({

	name: {
		type: String,
		required: true
	},
	email: String,
	phone: Number,
	enquiryCategory: [{ type: schema.Types.ObjectId, ref: 'enquirycategory' }],
	source: {
		type: String,
		enum: [ 'Online','Visitor','Contact Message','Facebook']
	},
	respondedThrough: {
		type: String,
		enum: [ 'Online','Visitor','Contact Message','Facebook']
	},
	date:Date,
	remarks:String
},{
	timestamps:true
})

const EnquiriesModel = mongoose.model('enquiries',EnquiriesSchema);
module.exports = EnquiriesModel;


