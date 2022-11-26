class Data {
    private method: string;
    private uri: string;
    private version: string;
    private message: string;
    private response: string | undefined;
    private fulfilled: boolean = false || true;

    constructor(method: string, uri: string, version: string,
        message: string, response?: string, fulfilled?: boolean) {
        this.method = method;
        this.uri = uri;
        this.version = version;
        this.message = message;
    }

    printResult() {
        return `{ method: '${this.method}',uri: '${this.uri}',version: '${this.version}',message: '${this.message}',response: '${this.response}', fulfilled: '${this.fulfilled}' }`
    }
}

let myData = new Data('GET', 'http://google.com', 'HTTP/1.1', 'Hello', 'Hi', true);
console.log(myData.printResult());

