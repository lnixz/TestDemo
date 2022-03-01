export default {
    install(app: any) {
        // console.log(app);
        const modules = import.meta.globEager('./*.vue')
        // console.log(modules);
        for (const path in modules) {
            app.component(changeStr(path.replace(/\.\//, '').replace(/.vue$/, '')), modules[path].default)
        }
    }
}

// 组件名称首字母大写
function changeStr(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}