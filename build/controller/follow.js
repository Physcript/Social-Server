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
            message: {
                result: res.locals.result,
                count: res.locals.count
            }
        });
        res.locals.result = undefined;
        res.locals.count = undefined;
    })
};
