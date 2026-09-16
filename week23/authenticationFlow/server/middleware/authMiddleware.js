import { asyncWrapper } from "../services/asyncWrapper.js"
import { craeteError } from "../services/errorHandler.js";
import { verifyToken } from "../services/generateToken.js";

export const autoMiddleware = asyncWrapper(async (req, _res, next) => {
    const { authorization } = req.headers;
    if (!authorization) throw new craeteError("missing required header", 401)
    const token = authorization.split("Bearer ")[1];    
    if (!token) throw new craeteError("missing required header", 401);
    const payload = verifyToken(token)
    req.user = payload
    next()
})