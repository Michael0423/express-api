const { json } = require("express/lib/response");

function LogMiddleware (req, res, next) {
    next();
    let input = Object.assign(req.params, req.query);
    input = JSON.stringify(input);
    let output = JSON.stringify(res.body);
    const logStr = `[${req.method} ${req.url}] input: ${input} output: ${output}`;
    console.log(logStr);
}

module.exports = LogMiddleware;