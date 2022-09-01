"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const followSchema = new mongoose_1.default.Schema({
    uid: {
        type: String,
        ref: 'User'
    },
    toFollow: {
        type: String,
        ref: 'User'
    }
});
const Follow = mongoose_1.default.model('Follow', followSchema);
exports.default = Follow;
