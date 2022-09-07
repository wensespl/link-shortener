"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
const mongoose_1 = require("mongoose");
const LinkSchema = new mongoose_1.Schema({
    long: { type: String, required: true },
    short: { type: String, required: true }
}, { versionKey: false });
LinkSchema.methods.toJSON = function () {
    const _a = this.toObject(), { _id } = _a, link = __rest(_a, ["_id"]);
    link.linkId = _id;
    return link;
};
module.exports = (0, mongoose_1.model)('Link', LinkSchema);
