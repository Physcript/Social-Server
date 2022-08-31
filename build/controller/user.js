"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    create: ((req, res) => {
        res.status(200).json({
            message: {
                user: 'Create'
            }
        });
    }),
    login: ((req, res) => {
        res.status(200).json({
            message: {
                user: res.locals.user,
                token: res.locals.token,
                userCompletion: res.locals.userCompletion.complete
            }
        });
        res.locals.user = undefined;
        res.locals.token = undefined;
        res.locals.userCompletion = undefined;
    }),
    complete: ((req, res) => {
        res.status(200).json({
            message: {
                public_id: res.locals.public_id,
                url: res.locals.url
            }
        });
        res.locals.url = undefined;
        res.locals.public_uid = undefined;
    }),
    complete_update: ((req, res) => {
        res.status(200).json({
            message: 'Complete'
        });
    }),
    logout: ((req, res) => {
        res.status(200).json({
            message: 'logout'
        });
    }),
    findOne: ((req, res) => {
        res.status(200).json({
            message: {
                user: res.locals.user
            }
        });
        res.locals.user = undefined;
    })
};
