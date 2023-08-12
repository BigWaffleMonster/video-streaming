"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const video_controller_1 = __importDefault(require("./controller/video-controller"));
const router = (0, express_1.Router)();
router.post('/upload', video_controller_1.default.upload);
router.get('/play', video_controller_1.default.play);
router.get('/getPlayerSettings', video_controller_1.default.getPlayerSettings);
exports.default = router;
//# sourceMappingURL=router.js.map