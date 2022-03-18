class EventEmitter {
    constructor() {
        this.cache = []
    }
    on(name, fn) {
        const tasks = this.cache[name]
        if (tasks) {
            tasks.push(fn)
        } else {
            this.cache[name] = [fn]
        }
    }
}