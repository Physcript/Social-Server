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
exports.create = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const create_1 = require("../validate/create");
const user_1 = require("../../../class/user");
const create = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    const isvalid = yield (0, create_1.isValid)(email, password);
    if (Object.keys(isvalid).length >= 1) {
        res.status(401).json({
            error: isvalid
        });
        return;
    }
    const encrypt = yield bcrypt_1.default.hash(password, 8);
    const uid = (yield Date.now().toString(36)) + Math.random().toString(36).substr(2);
    user_1.__user.create(email, encrypt, uid);
    next();
    return;
});
exports.create = create;
