interface IMyPromise {
    initBind: () => void;
    resolve: (value: any) => void;
    reject: (reason: any) => void;
    then: (onFulfilled: (PromiseResult: any) => void, onRejected: (PromiseResult: any) => void) => void;
}

class MyPromise implements IMyPromise {
    // 终值
    private _PromiseResult: any = null
    // 状态
    private _PromiseState: string = 'pending'
    // 保存成功回调
    private _onFulfilledCallbacks: Array<Function> = []
    // 保存失败回调
    private _onRejectedCallbacks: Array<Function> = []
    // 构造方法
    constructor(executor: (resolve: (value: unknown) => void, reject: (reason?: unknown) => void) => void) {
        this.initBind();
        try {
            executor(this.resolve, this.reject)
        } catch (e) {
            this.reject(e);
        }
    }
    // 初始化this
    initBind(): void {
        this.resolve = this.resolve.bind(this)
        this.reject = this.reject.bind(this)
    }

    resolve(value: any) {
        if (this._PromiseState !== 'pending') return
        this._PromiseState = 'fulfilled'
        this._PromiseResult = value
        while (this._onFulfilledCallbacks.length) {
            this._onFulfilledCallbacks.shift()!(this._PromiseResult)
        }
    }
    reject(reason?: unknown) {
        if (this._PromiseState !== 'pending') return
        this._PromiseState = 'rejected'
        this._PromiseResult = reason
        while (this._onRejectedCallbacks.length) {
            this._onRejectedCallbacks.shift()!(this._PromiseResult)
        }
    }
    then(onFulfilled: (PromiseResult: any) => void, onRejected: Function): void {
        onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : (val: any) => val
        onRejected = typeof onRejected === 'function' ? onRejected : (reason?: unknown) => { throw reason }

        if (this._PromiseState === 'fulfilled') {
            onFulfilled(this._PromiseResult)
        } else if (this._PromiseState === 'rejected') {
            onRejected(this._PromiseResult)
        } else {
            this._onFulfilledCallbacks.push(onFulfilled.bind(this))
            this._onRejectedCallbacks.push(onRejected.bind(this))
        }
    }
}

const test1 = new MyPromise((resolve, reject) => {
    resolve('成功')
    reject('失败')
})
console.log(test1);

const test2 = new MyPromise((resolve, reject) => {
    reject('失败')
    resolve('成功')
})
console.log(test2);

const test3 = new MyPromise((resolve, reject) => {
    throw ('错误')
})
console.log(test3);

const test = new MyPromise((resolve, reject) => {
    setTimeout(() => {
        resolve('成功')
    }, 2000)
}).then(res => console.log(res), err => console.log('err: ' + err))

