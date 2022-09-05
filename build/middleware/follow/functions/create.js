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
const follow_1 = require("../../../class/follow");
function create(req, res, next) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        // need headers token
        // need toFollow id of followed one
        // validate via token
        const { toFollow } = req.body;
        const { uid } = (_a = res.locals.user) !== null && _a !== void 0 ? _a : '';
        const result = yield follow_1.__follow.follow_unfollow(uid, toFollow);
        res.locals.result = result;
        next();
        return;
    });
}
exports.create = create;
