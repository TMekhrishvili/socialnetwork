export class EmailNotUniqueError extends Error {
    constructor(message?: string) {
        super(message);
        this.name = 'EmailNotUniqueError';
    }
}
