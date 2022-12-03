var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Melon = /** @class */ (function () {
    function Melon(weight, melonSort) {
        this.weight = weight;
        this.melonSort = melonSort;
    }
    Melon.prototype.printResult = function () {
        return toString();
    };
    return Melon;
}());
var Watermelon = /** @class */ (function (_super) {
    __extends(Watermelon, _super);
    function Watermelon(weigth, melonSort) {
        var _this = _super.call(this, weigth, melonSort) || this;
        _this.elementIndex = _this.weight * _this.melonSort.length;
        return _this;
    }
    Watermelon.prototype.toString = function () {
        return console.log("Element: Water \nSort: ".concat(this.melonSort));
    };
    return Watermelon;
}(Melon));
var Firemelon = /** @class */ (function (_super) {
    __extends(Firemelon, _super);
    function Firemelon(weigth, melonSort) {
        var _this = _super.call(this, weigth, melonSort) || this;
        _this.elementIndex = _this.weight * _this.melonSort.length;
        return _this;
    }
    Firemelon.prototype.toString = function () {
        return console.log("Element: Fire \nSort: ".concat(this.melonSort));
    };
    return Firemelon;
}(Melon));
var Earthmelon = /** @class */ (function (_super) {
    __extends(Earthmelon, _super);
    function Earthmelon(weigth, melonSort) {
        var _this = _super.call(this, weigth, melonSort) || this;
        _this.elementIndex = _this.weight * _this.melonSort.length;
        return _this;
    }
    Earthmelon.prototype.toString = function () {
        return console.log("Element: Earth \nSort: ".concat(this.melonSort));
    };
    return Earthmelon;
}(Melon));
var Airmelon = /** @class */ (function (_super) {
    __extends(Airmelon, _super);
    function Airmelon(weigth, melonSort) {
        var _this = _super.call(this, weigth, melonSort) || this;
        _this.elementIndex = _this.weight * _this.melonSort.length;
        return _this;
    }
    Airmelon.prototype.toString = function () {
        return console.log("Element: Air \nSort: ".concat(this.melonSort));
    };
    return Airmelon;
}(Melon));
var watermelon = new Firemelon(12.5, "Kingsize");
console.log(watermelon.toString());
