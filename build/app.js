"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
require("express-async-errors");
const helmet_1 = __importDefault(require("helmet"));
const errorHandler_1 = __importDefault(require("./middlewares/errorHandler"));
const appRouter_1 = __importDefault(require("./routers/appRouter"));
const app = (0, express_1.default)();
app.use(express_1.default.static('client/build'));
app.use(express_1.default.json());
app.use((0, helmet_1.default)());
app.use((0, cors_1.default)());
app.use('/link', appRouter_1.default);
app.use(errorHandler_1.default);
module.exports = app;
