const PENDING = 'pending',
    FULFILLED = 'fulfilled',
    REJECTED = 'rejected'

class Promise {
    constructor(executor) {
        this.PromiseState = 'pending'
        this.PromiseResult = null
        this.onFulfilledCallbacks = []
        this.onRejectedCallbacks = []
        this.initBind()
        executor(this.resolve, this.reject)
    }
    initBind() {
        this.resolve = this.resolve.bind(this)
        this.reject = this.reject.bind(this)
    }
    resolve(value) {
        if (this.PromiseState !== 'pending') return
        this.PromiseState = 'fulfilled'
        this.PromiseResult = value
        while (this.onFulfilledCallbacks.length) {
            this.onFulfilledCallbacks.shift()(this.PromiseResult)
        }
    }
    reject(reason) {
        if (this.PromiseState !== 'pending') return
        this.PromiseState = 'rejected'
        this.PromiseResult = reason
        while (this.onRejectedCallbacks.length) {
            this.onRejectedCallbacks.shift()(this.PromiseResult)
        }
    }
    then(onResolved, onRejected) {
        return new Promise((resolve, reject) => {
            if (this.PromiseState === 'fulfilled') {
                onResolved(this.PromiseResult)
            } else if (this.PromiseState === 'rejected') {
                onRejected(this.PromiseResult)
            } else {
                typeof onResolved === 'function' && this.onFulfilledCallbacks.push(onResolved)
                typeof onRejected === 'function' && this.onRejectedCallbacks.push(onRejected)
            }
        })
    }
    handleCallbacks(callbacks) {

    }

    static resolve(value) {
        if (value instanceof Promise) return value
        return new Promise((resolve, reject = null) => resolve(value))
    }

    static reject(reason) {
        return new Promise((resolve = null, reject) => reject(reason))
    }
}

module.exports = Promise


