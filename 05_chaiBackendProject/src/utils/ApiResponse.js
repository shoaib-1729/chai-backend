class ApiResponse {
    constructor(statusCode, data, message = "Success") {
        this.statusCode = statusCode;
        this.data = data;
        this.message = message;
        // 400 se kam status codes api response mei bhejege, aur 400 se zyada status codes api errors mei bhejege, yeh standard practice generally follow kari jaati hai production level par.
        // refer mdn docs for http status codes
        this.success = statusCode < 400;
    }
}