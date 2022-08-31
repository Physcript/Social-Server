"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = __importDefault(require("../route/user"));
const post_1 = __importDefault(require("../route/post"));
const auth_1 = __importDefault(require("../route/auth"));
module.exports = (app) => {
    app.use('/api/u', user_1.default);
    app.use('/api/p', post_1.default);
    app.use('/api/a', auth_1.default);
    app.use((req, res) => {
        res.status(404).json({
            error: 'Not found'
        });
    });
};
