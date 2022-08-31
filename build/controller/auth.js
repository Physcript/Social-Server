"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    authenticate: ((req, res) => {
        res.status(200).json({
            message: {
                USER: res.locals.user,
                COMPLETION: res.locals.userCompletion
            }
        });
        res.locals.user = undefined;
        res.locals.userCompletion = undefined;
    })
};
