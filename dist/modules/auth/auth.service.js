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
exports.AuthService = void 0;
const user_service_1 = __importDefault(require("../users/user.service"));
const email_not_unique_error_1 = require("../../utils/errors/email-not-unique.error");
class AuthService {
    constructor(userService) {
        this.userService = userService;
    }
    register(user) {
        return __awaiter(this, void 0, void 0, function* () {
            if (yield this.userService.userExist(user.email)) {
                throw new email_not_unique_error_1.EmailNotUniqueError('Email already exist.');
            }
            const data = {
                username: user.username,
                email: user.email,
                password: user.password
            };
            const result = yield this.userService.create(data);
            if (!result)
                throw new Error('Bad Request');
            return true;
        });
    }
}
exports.AuthService = AuthService;
exports.default = new AuthService(user_service_1.default);
