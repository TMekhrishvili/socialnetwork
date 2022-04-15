"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Responses = void 0;
const http_status_codes_1 = require("http-status-codes");
const config_1 = require("../config");
class Responses {
    static ok(res, data = null, statusCode = http_status_codes_1.StatusCodes.OK) {
        Responses.sendSuccess(res, statusCode, data);
    }
    static created(res, data = null, statusCode = http_status_codes_1.StatusCodes.CREATED) {
        Responses.sendSuccess(res, statusCode, data);
    }
    static noContent(res, data = null, statusCode = http_status_codes_1.StatusCodes.NO_CONTENT) {
        Responses.sendSuccess(res, statusCode, data);
    }
    static badRequest(res, err, errorCode, message = http_status_codes_1.ReasonPhrases.BAD_REQUEST) {
        Responses.sendError(res, err, http_status_codes_1.StatusCodes.BAD_REQUEST, message, null, errorCode);
    }
    static unauthorized(res, err, errorCode, message = http_status_codes_1.ReasonPhrases.UNAUTHORIZED) {
        Responses.sendError(res, err, http_status_codes_1.StatusCodes.UNAUTHORIZED, message, null, errorCode);
    }
    static forbidden(res, err, errorCode, message = http_status_codes_1.ReasonPhrases.FORBIDDEN) {
        Responses.sendError(res, err, http_status_codes_1.StatusCodes.FORBIDDEN, message, null, errorCode);
    }
    static notFound(res, err, errorCode, message = http_status_codes_1.ReasonPhrases.NOT_FOUND) {
        Responses.sendError(res, err, http_status_codes_1.StatusCodes.NOT_FOUND, message, null, errorCode);
    }
    static notUniq(res, err, errorCode, message = http_status_codes_1.ReasonPhrases.CONFLICT) {
        Responses.sendError(res, err, http_status_codes_1.StatusCodes.CONFLICT, message, null, errorCode);
    }
    static validationError(res, err, errorCode, message = http_status_codes_1.ReasonPhrases.UNPROCESSABLE_ENTITY) {
        Responses.sendError(res, err, http_status_codes_1.StatusCodes.UNPROCESSABLE_ENTITY, message, err, errorCode);
    }
    static internalServerError(res, err, errorCode, message = http_status_codes_1.ReasonPhrases.INTERNAL_SERVER_ERROR) {
        Responses.sendError(res, err, http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR, message, null, errorCode);
    }
    static sendSuccess(res, statusCode, data = null) {
        res.status(statusCode).send(data);
    }
    static sendError(res, err, statusCode, message, errors = null, errorCode) {
        console.error(err);
        res.status(statusCode).send(Object.assign({ errorCode,
            message, trace: config_1.NODE_ENV === 'production' ? null : err.stack }, (errors && { errors })));
    }
}
exports.Responses = Responses;
