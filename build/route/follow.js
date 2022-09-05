"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const follow_1 = __importDefault(require("../controller/follow"));
const create_1 = require("../middleware/follow/functions/create");
const login_1 = require("../middleware/auth/functions/login");
const check_1 = require("../middleware/follow/functions/check");
const router = express_1.default.Router();
// middleware
// authetication 
router.post('/create', login_1.login, create_1.create, follow_1.default.create);
router.post('/check', login_1.login, check_1.check, follow_1.default.check);
exports.default = router;
