"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailNotUniqueError = void 0;
class EmailNotUniqueError extends Error {
    constructor(message) {
        super(message);
        this.name = 'EmailNotUniqueError';
    }
}
exports.EmailNotUniqueError = EmailNotUniqueError;
