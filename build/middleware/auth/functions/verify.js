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
exports.verify = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = __importDefault(require("../../../config/"));
const User_1 = __importDefault(require("../../../model/User"));
function verify(req, res, next) {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function* () {
        const { token } = (_a = req.headers) !== null && _a !== void 0 ? _a : '';
        let { uid } = (_b = req.body) !== null && _b !== void 0 ? _b : '';
        let _uid = undefined;
        const data = yield jsonwebtoken_1.default.verify(`${token}`, `${config_1.default.token.login}`, (err, decoded) => {
            if (err) {
                return;
                console.log('no token header found');
            }
            res.locals.decoded = decoded;
            console.log('saving header token user');
            return decoded;
        });
        const user = yield User_1.default.findOne({ uid });
        if (user === null) {
            uid = '';
        }
        let decoded = yield res.locals.decoded;
        if (decoded !== undefined) {
            _uid = res.locals.decoded.uid;
        }
        else {
            _uid = uid;
        }
        if (_uid === '' || _uid === undefined) {
            res.status(401).json({
                error: 'Invalid action'
            });
            return;
        }
        res.locals.uid = _uid;
        next();
    });
}
exports.verify = verify;
