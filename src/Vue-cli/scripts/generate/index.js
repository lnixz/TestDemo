// index.js

// 导入模板
import {
    vueTemplate,
    routerTemplate
} from './template.js'
import useHelper from '../useHelper.js'
const { fs, path, resolve, log, successLog, errorLog } = useHelper()

// 生成文件
const generateFile = (path, data) => {
    if (fs.existsSync(path)) {
        errorLog(`${path}文件已存在`)
        return
    }
    return new Promise((resolve, reject) => {
        fs.writeFile(path, data, 'utf8', err => {
            if (err) {
                errorLog(err.message)
                reject(err)
            } else {
                resolve(true)
            }
        })
    })
}
log('请输入模块名称：')
let componentName = ''
process.stdin.on('data', async chunk => {
    // 组件名称
    const inputName = String(chunk).trim().toString()
    // Vue页面组件路径
    const componentPath = resolve('../src/views', inputName)
    // router 模块路径
    const routerPath = resolve('../src/router/modules')
    // vue文件
    const vueFile = resolve(componentPath, 'Index.vue')
    // 路由模块文件
    const routerFile = resolve(routerPath, `${inputName}.js`)
    // 判断组件文件夹是否存在
    const hasComponentExists = fs.existsSync(componentPath)
    const hasRouterExists = fs.existsSync(routerFile)
    if (hasComponentExists) {
        errorLog(`${inputName}页面已存在，请重新输入：`)
        return
    } else if (hasRouterExists) {
        errorLog(`${inputName}路由已存在，请重新输入：`)
        return
    }else {
        await dotExistDirectoryCreate(componentPath)
        await dotExistDirectoryCreate(routerPath)
    }
    try {
        // 获取组件名
        if (inputName.includes('/')) {
            const inputArr = inputName.split('/')
            componentName = inputArr[inputArr.length - 1]
        } else {
            componentName = inputName
        }
        log(`正在生成 vue 文件 ${vueFile}`)
        await generateFile(vueFile, vueTemplate(componentName))
        log(`正在生成路由文件 ${routerFile}`)
        await generateFile(routerFile, routerTemplate(componentName))
        successLog('生成成功')
    } catch (e) {
        errorLog(e.message)
    }

    process.stdin.emit('end')
})
process.stdin.on('end', () => {
    log('exit')
    process.exit()
})

function dotExistDirectoryCreate(directory) {
    return new Promise((resolve) => {
        mkdirs(directory, function () {
            resolve(true)
        })
    })
}
// 递归创建目录
function mkdirs(directory, callback) {
    var exists = fs.existsSync(directory)
    if (exists) {
        callback()
    } else {
        log(`正在生成目录 ${directory}`)
        mkdirs(path.dirname(directory), function () {
            fs.mkdirSync(directory)
            callback()
        })
    }
}
