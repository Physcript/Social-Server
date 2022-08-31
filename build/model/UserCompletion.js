"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const userCompletion = new mongoose_1.default.Schema({
    user_uid: {
        type: String,
        ref: 'User'
    },
    complete: {
        type: Boolean,
        default: false
    }
});
const UserCompletion = mongoose_1.default.model('UserCompletion', userCompletion);
exports.default = UserCompletion;
