"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function welcome(req, res) {
    return res.status(200).json({ message: `Hey ${req.hostname} User` });
}
function indexPage(req, res) {
    let context = {
        hostName: req.hostname,
        message: "Wow Typescript & Express",
    };
    // return res.status(200).json(context);
    // return res.sendFile(pathName)
    res.render("index/index.pug");
}
function sendData(req, res) {
    let requestData = req.body;
    return res.status(200).json({ data: requestData });
}
const ControllerMethods = {
    indexMethod: welcome,
    renderIndexPage: indexPage,
    handlePost: sendData,
};
exports.default = ControllerMethods;
//# sourceMappingURL=indexController.js.map