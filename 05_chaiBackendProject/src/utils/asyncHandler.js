// db se baat karne ke liye apna ek wrapper function bana rahe, yeh ek high order function higa jismei function pass karege woh is function ko execute karke de dega, utility mei banate hai generally
// promise, try-catch dono methods se bann sakta hai

// using promises (advanced syntax)
const asyncHandler = (requestHandler) => {
    // it returns a middleware
    return (req, res, next) => {
        // Promise directly resolve karege
        Promise.resolve(requestHandler(req, res, next)).catch((error) =>
            // agar koi error hai toh next error handling middleware mei pass kardo skipping the non-error handling middlewares
            next(error)
        );
    };
};

// using try- catch
// const asyncHandler = (func) => async(req, res, next) => {
//     try {
//         await func(req, res, next);
//     } catch (error) {
//         res.status(error.code || 500).json({
//             success: false,
//             message: error.message,
//         });
//     }
// };

export { asyncHandler };