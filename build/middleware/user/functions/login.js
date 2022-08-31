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
exports.login = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const find_1 = require("../validate/find");
const user_1 = require("../../../class/user");
function login(req, res, next) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        let { email, password } = req.body;
        if (email.trim() === '' || password.trim() === '') {
            res.status(401).json({
                error: 'Invalid email/password'
            });
            return;
        }
        const user = yield (0, find_1.byEmail)(email !== null && email !== void 0 ? email : '');
        if (!user) {
            res.status(401).json({
                error: 'Invalid email/password'
            });
            return;
        }
        const isMatch = yield bcrypt_1.default.compare(password, (_a = user.password) !== null && _a !== void 0 ? _a : '');
        if (!isMatch) {
            res.status(401).json({
                error: 'Invalid email/password'
            });
            return;
        }
        yield user_1.__user.login(user, res);
        next();
        return;
    });
}
exports.login = login;
