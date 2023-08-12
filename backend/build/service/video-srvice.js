"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const busboy_1 = __importDefault(require("busboy"));
const path_1 = __importDefault(require("path"));
class VideoService {
    async upload(req) {
        console.log('POST request');
        const bb = (0, busboy_1.default)({ headers: req.headers });
        bb.on('file', (name, file, info) => {
            const { filename, encoding, mimeType } = info;
            const saveTo = path_1.default.join(`busboy-upload-1`);
            file.pipe(fs_1.default.createWriteStream(saveTo));
            file.on('data', (data) => { }).on('close', () => { });
        });
        bb.on('field', (name, val, info) => { });
        bb.on('close', () => { });
        req.pipe(bb);
        try {
        }
        catch (e) { }
    }
    async play() {
        try {
        }
        catch (e) { }
    }
    async getPlayerSettings() {
        try {
        }
        catch (e) { }
    }
}
exports.default = new VideoService();
//# sourceMappingURL=video-srvice.js.map