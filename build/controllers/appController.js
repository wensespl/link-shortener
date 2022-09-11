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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLongUrl = exports.createShortUrl = void 0;
const Link_1 = __importDefault(require("../models/Link"));
const redisClient_1 = __importDefault(require("../redisClient"));
const createShortUrl = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { long_url, short_url } = req.body;
    let link = yield Link_1.default.findOne({ short: short_url });
    if (link)
        throw new Error('Short URL allready in use');
    link = new Link_1.default({ long: long_url, short: short_url });
    yield link.save();
    return res.status(201).json(link);
});
exports.createShortUrl = createShortUrl;
const getLongUrl = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { short_url } = req.params;
    let data = yield redisClient_1.default.get(`link:${short_url}`);
    let link;
    if (!data) {
        link = yield Link_1.default.findOne({ short: short_url });
        if (!link)
            throw new Error('URL not found');
        yield redisClient_1.default.set(`link:${short_url}`, JSON.stringify(link));
        console.log('Not cache');
    }
    else {
        link = JSON.parse(data);
        console.log('cache');
    }
    res.redirect(302, link.long);
});
exports.getLongUrl = getLongUrl;
