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
exports.__follow = void 0;
const User_1 = __importDefault(require("../model/User"));
const Follow_1 = __importDefault(require("../model/Follow"));
class __Follow {
    constructor() { }
    follow_unfollow(uid, _uid) {
        return __awaiter(this, void 0, void 0, function* () {
            const isFollowed = yield Follow_1.default.findOne({ uid, toFollow: _uid });
            if (isFollowed === null) {
                yield this.follow(uid, _uid);
            }
            else {
                yield this.unfollow(uid, _uid);
            }
        });
    }
    follow(uid, toFollow) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield User_1.default.findOne({ uid: toFollow });
            if (user === null)
                return;
            const follow = new Follow_1.default({
                uid,
                toFollow
            });
            yield follow.save();
            return;
        });
    }
    unfollow(uid, toUnFollow) {
        return __awaiter(this, void 0, void 0, function* () {
            yield Follow_1.default.deleteOne({ uid, toFollow: toUnFollow });
            return;
        });
    }
    check(uid, toFollow) {
        return __awaiter(this, void 0, void 0, function* () {
            const follow = yield Follow_1.default.findOne({ uid, toFollow });
            if (follow) {
                return true;
            }
            return false;
        });
    }
}
exports.__follow = new __Follow();
