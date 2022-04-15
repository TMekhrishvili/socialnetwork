"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NODE_ENV = exports.mongouri = exports.port = void 0;
exports.port = process.env.port || 3000;
exports.mongouri = process.env.mongouri || 'mongodb+srv://admin:admin123@cluster0.w0dvv.mongodb.net/tlsn?retryWrites=true&w=majority';
exports.NODE_ENV = process.env.NODE_ENV || 'development';
