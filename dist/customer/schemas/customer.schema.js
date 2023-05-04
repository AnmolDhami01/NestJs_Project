"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerSchema = void 0;
const mongoose = require("mongoose");
exports.CustomerSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: Number,
    createdAt: { type: Date, default: Date.now },
});
//# sourceMappingURL=customer.schema.js.map