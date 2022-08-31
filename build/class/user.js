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
exports.__user = void 0;
const config_1 = __importDefault(require("../config"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const User_1 = __importDefault(require("../model/User"));
const UserCompletion_1 = __importDefault(require("../model/UserCompletion"));
const find_1 = require("../middleware/userCompletion/validate/find");
class _User {
}
class __User extends _User {
    create(email, password, uid) {
        return __awaiter(this, void 0, void 0, function* () {
            const userCompletion = new UserCompletion_1.default({
                user_uid: uid
            });
            const user = new User_1.default({
                email,
                password,
                uid,
                avatar: '',
                avatar_id: '',
                token: '',
                firstName: '',
                lastName: '',
                address: '',
            });
            yield user.save();
            yield userCompletion.save();
            return;
        });
    }
    login(user, res) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const _user = {
                _id: user._id,
                email: user.email,
                firstName: user.firstName,
                lastNAme: user.lastName,
                uid: user.uid,
                avatar: user.avatar
            };
            const _userCompletion = yield (0, find_1.byUid)((_a = user.uid) !== null && _a !== void 0 ? _a : '');
            const token = jsonwebtoken_1.default.sign(_user, `${config_1.default.token.login}`);
            user.token = token;
            yield user.save();
            res.locals.user = _user;
            res.locals.token = token;
            res.locals.userCompletion = _userCompletion;
            return;
        });
    }
}
exports.__user = new __User();
