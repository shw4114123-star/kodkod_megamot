export function craeteError(message, status) {
    const err = new Error(message);
    err.statusCode = status;
    console.log(err);
    
    return err;
}

export function errorHandler(err, _req, res, _next) {
    const statusCode = err.statusCode || 500
    console.log({"error": err});
    res.status(statusCode).json({
        success: false,
        message: err.message
    })
    
}