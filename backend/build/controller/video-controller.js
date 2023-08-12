"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const video_srvice_1 = __importDefault(require("../service/video-srvice"));
class VideoController {
    async upload(req, res, next) {
        try {
            let resp = await video_srvice_1.default.upload(req);
            res.status(200).json({ data: resp });
        }
        catch (e) {
            res.status(400).json({ error: '' });
        }
    }
    async play(req, res, next) {
        try {
        }
        catch (e) {
            res.status(400).json({ error: '' });
        }
    }
    async getPlayerSettings(req, res, next) {
        try {
        }
        catch (e) {
            res.status(400).json({ error: '' });
        }
    }
}
exports.default = new VideoController();
//# sourceMappingURL=video-controller.js.map