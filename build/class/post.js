"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.__post = void 0;
const Post_1 = __importDefault(require("../model/Post"));
class __Post {
    constructor() {
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // create post
            // create pid 
            let { post: _post, name, fromUid, toUid } = req.body;
            if (toUid === undefined || toUid === '') {
                toUid = fromUid;
            }
            const pid = (yield Date.now().toString(36)) + Math.random().toString(36).substr(2);
            const post = new Post_1.default({
                body: _post,
                name,
                fromUid,
                toUid,
                pid
            });
            yield post.save();
            return;
        });
    }
    findUid(res, uid, limit = 5, skip = 0) {
        return __awaiter(this, void 0, void 0, function* () {
            const count = yield Post_1.default.find({ toUid: uid }).count();
            const post = yield Post_1.default.find({ toUid: uid }).sort({ createdAt: -1 }).limit(limit).skip(skip);
            res.locals.post = post;
            res.locals.count = count;
            return;
        });
    }
}
exports.__post = new __Post();
