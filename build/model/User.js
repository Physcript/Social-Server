"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const userSchema = new mongoose_1.default.Schema({
    email: {
        type: String,
        lowercase: true
    },
    password: String,
    firstName: {
        type: String,
        lowercase: true
    },
    lastName: {
        type: String,
        lowercase: true
    },
    address: {
        type: String,
        lowercase: true
    },
    avatar: String,
    avatar_id: String,
    uid: String,
    token: String,
}, { timestamps: true });
const User = mongoose_1.default.model('User', userSchema);
exports.default = User;
