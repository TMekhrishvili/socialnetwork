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
exports.UserService = void 0;
const user_model_1 = __importDefault(require("./user.model"));
class UserService {
    create(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield user_model_1.default.create(user);
            return result;
        });
    }
    userExist(email) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield user_model_1.default.exists({
                email: {
                    $regex: '^' + email.toLowerCase(),
                    $options: 'i',
                },
            });
            if (result)
                return true;
            return false;
        });
    }
}
exports.UserService = UserService;
exports.default = new UserService();
