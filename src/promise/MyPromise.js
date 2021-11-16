var MyPromise = /** @class */ (function () {
    // 构造方法
    function MyPromise(executor) {
        // 终值
        this._PromiseResult = null;
        // 状态
        this._PromiseState = 'pending';
        // 保存成功回调
        this._onFulfilledCallbacks = [];
        // 保存失败回调
        this._onRejectedCallbacks = [];
        this.initBind();
        try {
            executor(this.resolve, this.reject);
        }
        catch (e) {
            this.reject(e);
        }
    }
    // 初始化this
    MyPromise.prototype.initBind = function () {
        this.resolve = this.resolve.bind(this);
        this.reject = this.reject.bind(this);
    };
    MyPromise.prototype.resolve = function (value) {
        if (this._PromiseState !== 'pending')
            return;
        this._PromiseState = 'fulfilled';
        this._PromiseResult = value;
        while (this._onFulfilledCallbacks.length) {
            this._onFulfilledCallbacks.shift()(this._PromiseResult);
        }
    };
    MyPromise.prototype.reject = function (reason) {
        if (this._PromiseState !== 'pending')
            return;
        this._PromiseState = 'rejected';
        this._PromiseResult = reason;
        while (this._onRejectedCallbacks.length) {
            this._onRejectedCallbacks.shift()(this._PromiseResult);
        }
    };
    MyPromise.prototype.then = function (onFulfilled, onRejected) {
        onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : function (val) { return val; };
        onRejected = typeof onRejected === 'function' ? onRejected : function (reason) { throw reason; };
        if (this._PromiseState === 'fulfilled') {
            onFulfilled(this._PromiseResult);
        }
        else if (this._PromiseState === 'rejected') {
            onRejected(this._PromiseResult);
        }
        else {
            this._onFulfilledCallbacks.push(onFulfilled.bind(this));
            this._onRejectedCallbacks.push(onRejected.bind(this));
        }
    };
    return MyPromise;
}());
var test1 = new MyPromise(function (resolve, reject) {
    resolve('成功');
    reject('失败');
});
console.log(test1);
var test2 = new MyPromise(function (resolve, reject) {
    reject('失败');
    resolve('成功');
});
console.log(test2);
var test3 = new MyPromise(function (resolve, reject) {
    throw ('错误');
});
console.log(test3);
var test = new MyPromise(function (resolve, reject) {
    setTimeout(function () {
        resolve('成功');
    }, 2000);
}).then(function (res) { return console.log(res); }, function (err) { return console.log('err: ' + err); });
