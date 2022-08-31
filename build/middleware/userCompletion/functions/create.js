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
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = void 0;
const fs = require('fs');
const cloudinary = require('cloudinary').v2;
const streamifier = require('streamifier');
cloudinary.config({
    cloud_name: 'dnnq8kne2',
    api_key: '711294436262969',
    api_secret: 'CnBFRYCGRZjN36Y4JGnC5tfA_Ic'
});
function create(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        // update user by uid
        const _file = req.files;
        let _data = yield getUrl(_file);
        res.locals.public_id = _data.public_id;
        res.locals.url = _data.url;
        next();
        return;
    });
}
exports.create = create;
const getUrl = (files) => {
    const file = files[0];
    return new Promise((resolve, reject) => {
        let cld_upload_stream = cloudinary.uploader.upload_stream({
            folder: 'social_2022'
        }, (error, result) => {
            if (result) {
                resolve(result);
            }
            else {
                reject(error);
            }
        });
        streamifier.createReadStream(file.buffer).pipe(cld_upload_stream);
    });
};
