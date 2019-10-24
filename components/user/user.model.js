const mongoose = require('mongoose');
const schema = mongoose.Schema;

const UserSchema = new schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        sparse: true
    },
    email_verified_at: Date,
    password: {
        type: String,
        required: true
    },
    passwordTokenExpiryTime: Date,
    passwordResetToken: String,
    image: String,
    Phone: Number,
    address: String,
    role_id: String
}, {
    timestamps: true
});

const UserModel = mongoose.model('user', UserSchema);
module.exports = UserModel;

