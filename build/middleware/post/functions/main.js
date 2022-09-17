"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = void 0;
const post_1 = require("../../../class/post");
function main(req, res, next) {
    console.log('main view post');
    post_1.__post.mainPost(res, 'l855rka10bajj7pw6cua');
    next();
    return;
}
exports.main = main;
