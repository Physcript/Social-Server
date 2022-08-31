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
const find_1 = require("../../userCompletion/validate/find");
const find_2 = require("../../user/validate/find");
const config_1 = __importDefault(require("../../../config"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function login(req, res, next) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        const { token } = req.headers;
        const data = yield jsonwebtoken_1.default.verify(`${token}`, `${config_1.default.token.login}`, (err, decoded) => {
            if (err) {
                return;
            }
            // fix this
            res.locals._user = decoded;
            return decoded;
        });
        if (data === undefined) {
            res.status(401).json({
                error: 'error token'
            });
            return;
        }
        const _userCompletion = yield (0, find_1.byUid)(res.locals._user.uid);
        res.locals.userCompletion = (_a = _userCompletion.complete) !== null && _a !== void 0 ? _a : false;
        const user = yield (0, find_2.byUid)(res.locals._user.uid);
        res.locals.user = user;
        next();
        return;
    });
}
exports.login = login;
