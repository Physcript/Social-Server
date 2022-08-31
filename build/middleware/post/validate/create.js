"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValid = void 0;
const isValid = (body) => {
    const error = {};
    if (body.trim() === '') {
        error['body'] = 'Error required';
    }
    return error;
};
exports.isValid = isValid;
