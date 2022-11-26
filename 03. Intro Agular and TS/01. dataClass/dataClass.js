var Data = /** @class */ (function () {
    function Data(method, uri, version, message, response, fulfilled) {
        this.fulfilled = false || true;
        this.method = method;
        this.uri = uri;
        this.version = version;
        this.message = message;
    }
    Data.prototype.printResult = function () {
        return "{ method: '".concat(this.method, "',uri: '").concat(this.uri, "',version: '").concat(this.version, "',message: '").concat(this.message, "',response: '").concat(this.response, "', fulfilled: '").concat(this.fulfilled, "' }");
    };
    return Data;
}());
var myData = new Data('GET', 'http://google.com', 'HTTP/1.1', 'Hello', 'Hi', true);
console.log(myData.printResult());
