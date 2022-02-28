const _userInof = {
    name:'zhagnsan',
    age:18
}

export default {
    getUserInfo(cb) {
        setTimeout(() => cb(_userInof), 100)
    }
}