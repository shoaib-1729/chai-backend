// Custom error class for handling API errors
// refer nodejs Error API  docs
class ApiError extends Error {
    constructor(
        statusCode,
        message = "Something went wrong",
        errors = [],
        stack = ""
    ) {
        // call the parent constructor Error class
        super(message);
        // initialize the properties
        this.statusCode = statusCode;
        this.data = null;
        this.success = false;
        this.errors = errors;
        // handle error stack
        if (stack) {
            this.stack = stack;
        } else {
            Error.captureStackTrace(this, this.constructor);
        }
    }
}

export { ApiError };