"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CreateCourseService = /** @class */ (function () {
    function CreateCourseService() {
    }
    CreateCourseService.prototype.execute = function (_a) {
        var name = _a.name, durantion = _a.durantion, educator = _a.educator;
        console.log(name, durantion, educator);
    };
    return CreateCourseService;
}());
exports.default = new CreateCourseService;
