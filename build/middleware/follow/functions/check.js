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
exports.check = void 0;
const follow_1 = require("../../../class/follow");
function check(req, res, next) {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function* () {
        const { toFollow } = (_a = req.body) !== null && _a !== void 0 ? _a : '';
        const { uid } = (_b = res.locals.user) !== null && _b !== void 0 ? _b : '';
        const result = yield follow_1.__follow.check(uid, toFollow);
        const count = yield follow_1.__follow.countFollow(toFollow);
        res.locals.result = yield result;
        res.locals.count = yield count;
        next();
        return;
    });
}
exports.check = check;
