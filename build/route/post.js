"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const post_1 = __importDefault(require("../controller/post"));
const create_1 = require("../middleware/post/functions/create");
const findPost_1 = require("../middleware/post/functions/findPost");
const router = express_1.default.Router();
// http://localhost:1337/api/p/
router.post('/create', create_1.create, post_1.default.create);
router.post('/:uid', findPost_1.findPost, post_1.default.findUid);
exports.default = router;
