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
exports.update = void 0;
const find_1 = require("../../user/validate/find");
const find_2 = require("../validate/find");
function update(req, res, next) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        // url == avatar
        const { firstName, lastName, address, public_id, url } = req.body;
        const uid = (_a = res.locals.user.uid) !== null && _a !== void 0 ? _a : '';
        const user = yield (0, find_1.byUid)(uid);
        const completion = yield (0, find_2.byUid)(uid);
        user.firstName = firstName !== null && firstName !== void 0 ? firstName : '';
        user.lastName = lastName !== null && lastName !== void 0 ? lastName : '';
        user.address = address !== null && address !== void 0 ? address : '';
        user.avatar = url !== null && url !== void 0 ? url : '';
        user.avatar_id = public_id !== null && public_id !== void 0 ? public_id : '';
        completion.complete = true;
        yield user.save();
        yield completion.save();
        next();
        return;
    });
}
exports.update = update;
