"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const follow_1 = __importDefault(require("../controller/follow"));
const create_1 = require("../middleware/follow/functions/create");
const login_1 = require("../middleware/auth/functions/login");
const router = express_1.default.Router();
// middleware
// authetication 
router.post('/create', login_1.login, create_1.create, follow_1.default.create);
exports.default = router;
