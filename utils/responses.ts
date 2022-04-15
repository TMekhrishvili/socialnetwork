import { Response } from 'express';
import { StatusCodes, ReasonPhrases } from 'http-status-codes';
import { NODE_ENV } from '../config';

export class Responses {
    static ok<T>(
        res: Response,
        data: T | null = null,
        statusCode: StatusCodes = StatusCodes.OK
    ): void {
        Responses.sendSuccess(res, statusCode, data);
    }

    static created<T>(
        res: Response,
        data: T | null = null,
        statusCode: StatusCodes = StatusCodes.CREATED
    ): void {
        Responses.sendSuccess(res, statusCode, data);
    }

    static noContent<T>(
        res: Response,
        data: T | null = null,
        statusCode: StatusCodes = StatusCodes.NO_CONTENT
    ): void {
        Responses.sendSuccess(res, statusCode, data);
    }

    static badRequest(
        res: Response,
        err: Error,
        errorCode?: string,
        message = ReasonPhrases.BAD_REQUEST
    ): void {
        Responses.sendError(
            res,
            err,
            StatusCodes.BAD_REQUEST,
            message,
            null,
            errorCode
        );
    }

    static unauthorized(
        res: Response,
        err: Error,
        errorCode?: string,
        message = ReasonPhrases.UNAUTHORIZED
    ): void {
        Responses.sendError(
            res,
            err,
            StatusCodes.UNAUTHORIZED,
            message,
            null,
            errorCode
        );
    }

    static forbidden(
        res: Response,
        err: Error,
        errorCode?: string,
        message = ReasonPhrases.FORBIDDEN
    ): void {
        Responses.sendError(
            res,
            err,
            StatusCodes.FORBIDDEN,
            message,
            null,
            errorCode
        );
    }

    static notFound(
        res: Response,
        err: Error,
        errorCode?: string,
        message = ReasonPhrases.NOT_FOUND
    ): void {
        Responses.sendError(
            res,
            err,
            StatusCodes.NOT_FOUND,
            message,
            null,
            errorCode
        );
    }

    static notUniq(
        res: Response,
        err: Error,
        errorCode?: string,
        message = ReasonPhrases.CONFLICT
    ): void {
        Responses.sendError(
            res,
            err,
            StatusCodes.CONFLICT,
            message,
            null,
            errorCode
        );
    }

    static validationError(
        res: Response,
        err: Error,
        errorCode?: string,
        message = ReasonPhrases.UNPROCESSABLE_ENTITY
    ): void {
        Responses.sendError(
            res,
            err,
            StatusCodes.UNPROCESSABLE_ENTITY,
            message,
            err,
            errorCode
        );
    }

    static internalServerError(
        res: Response,
        err: Error,
        errorCode?: string,
        message = ReasonPhrases.INTERNAL_SERVER_ERROR
    ): void {
        Responses.sendError(
            res,
            err,
            StatusCodes.INTERNAL_SERVER_ERROR,
            message,
            null,
            errorCode
        );
    }

    private static sendSuccess<T>(
        res: Response,
        statusCode: number,
        data: T | null = null
    ) {
        res.status(statusCode).send(data);
    }

    private static sendError<T>(
        res: Response,
        err: Error,
        statusCode: number,
        message: string,
        errors: T | null = null,
        errorCode?: string
    ) {
        console.error(err);

        res.status(statusCode).send({
            errorCode,
            message,
            trace: NODE_ENV === 'production' ? null : err.stack,
            ...(errors && { errors }),
        });
    }
}

