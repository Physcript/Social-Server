"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
module.exports = (app) => {
    app.use((req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
        res.setHeader('Access-Control-Allow-Method', 'POST,GET,PATCH,DELETE,OPTIONS');
        res.setHeader('Access-Control-Allow-headers', 'X-Requested-With,Content-Type,token');
        res.setHeader('Access-Control-Allow-credentials', 'true');
        next();
    });
    return;
};
