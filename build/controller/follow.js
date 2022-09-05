"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    create: ((req, res) => {
        res.status(200).json({
            message: 'Followed'
        });
    }),
    check: ((req, res) => {
        res.status(200).json({
            message: res.locals.result
        });
    })
};
