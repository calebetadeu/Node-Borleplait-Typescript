"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCourse = void 0;
var CreateCourseServer_1 = __importDefault(require("./CreateCourseServer"));
function createCourse(req, res) {
    CreateCourseServer_1.default.execute({
        name: "Node",
        educator: "Calebe Tadeu",
        durantion: 10
    });
    return res.send();
}
exports.createCourse = createCourse;
