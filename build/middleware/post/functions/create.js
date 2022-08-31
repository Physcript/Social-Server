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
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = void 0;
const create_1 = require("../validate/create");
const post_1 = require("../../../class/post");
const create = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { post } = req.body;
    const error = (0, create_1.isValid)(post);
    if (Object.keys(error).length >= 1) {
        res.status(401).json({
            error: 'Empty body'
        });
        return;
    }
    yield post_1.__post.create(req, res);
    next();
    return;
});
exports.create = create;
