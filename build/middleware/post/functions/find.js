"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findPost = void 0;
function findPost(req, res, next) {
    var _a;
    const { pid } = (_a = req.params) !== null && _a !== void 0 ? _a : '';
    console.log(pid, 'as');
    next();
    return;
}
exports.findPost = findPost;
