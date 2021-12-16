import call from "./call"

export default function bind(Fn, obj, ...args) {
    return function () {
        return call(Fn, obj, ...args)
    }
}