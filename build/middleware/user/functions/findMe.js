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
exports.findMe = void 0;
const find_1 = require("../validate/find");
function findMe(req, res, next) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        const { uid } = (_a = req.params) !== null && _a !== void 0 ? _a : '';
        const user = yield (0, find_1.byUid)(uid);
        user.password = '';
        user.token = '';
        res.locals.user = user;
        next();
        return;
    });
}
exports.findMe = findMe;
