const mongoose = require("mongoose");



const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        minlength: 10,
        unique: true
    },
    createdAt: {
        type: Date,
        immutable: true,
        default: () => {
            return Date.now();
        },

    },
    updatedAt: {
        type: String,
        immutable: true,
        default: () => {
            return Date.now();
        },
    },
    userType: {
        type: String,
        required: true,
        default: "CUSTOMER"
    },
    userStatus: {
        type: String,
        required: true,
        default: "APPROVED"
    },
    ticketCreated: {
        type: [mongoose.SchemaType.ObjectId],
        ref: "ticket"
    },
    ticketAssigned: {
        type: [mongoose.SchemaType.ObjectId],
        ref: "ticket"
    }


});


module.exports = mongoose.model("User", userSchema);