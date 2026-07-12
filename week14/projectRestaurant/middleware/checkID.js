export const idValidation = (req, res, next) => {
    if (isNaN(+req.params.id)) return res.end("vlidation ")
    next()
}
