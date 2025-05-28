function errorHandler(err, req, res, next) {
    console.log("errore", err)
    res.status(500)
    res.json({
        error: "errore interno del server"
    });
}

export default errorHandler