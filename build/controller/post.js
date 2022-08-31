"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    create: ((req, res) => {
        res.status(200).json({
            message: 'create'
        });
    }),
    findUid: ((req, res) => {
        res.status(200).json({
            message: {
                post: res.locals.post,
                count: res.locals.count
            }
        });
        res.locals.post = undefined;
        res.locals.count = undefined;
    })
};
