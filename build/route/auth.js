"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_1 = __importDefault(require("../controller/auth"));
const login_1 = require("../middleware/auth/functions/login");
const router = express_1.default.Router();
router.get('/auth', login_1.login, auth_1.default.authenticate);
exports.default = router;
