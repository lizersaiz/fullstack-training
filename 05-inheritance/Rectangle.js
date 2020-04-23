"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Shape_1 = require("./Shape");
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(theX, theY, _lenght, _widht) {
        var _this = _super.call(this, theX, theY) || this;
        _this._lenght = _lenght;
        _this._widht = _widht;
        return _this;
    }
    Object.defineProperty(Rectangle.prototype, "lenght", {
        get: function () {
            return this._lenght;
        },
        set: function (value) {
            this._lenght = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Rectangle.prototype, "widht", {
        get: function () {
            return this._widht;
        },
        set: function (value) {
            this._widht = value;
        },
        enumerable: true,
        configurable: true
    });
    Rectangle.prototype.getInfo = function () {
        return _super.prototype.getInfo.call(this) +
            (" Lenght=" + this.lenght + " Width=" + this.widht);
    };
    return Rectangle;
}(Shape_1.Shape));
exports.Rectangle = Rectangle;
