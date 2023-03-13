// template.js

const vueTemplate = componentName => {
    return `
<template>
    <div class="${componentName}">
        ${componentName}组件
    </div>
</template>
<script>
    export default {
        name: '${componentName}'
    };
</script>
<style lang="stylus" scoped>
.${componentName} {
};
</style>`
}

const routerTemplate = componentName => {
    return `
export default {
    path: '/${componentName}',
    name: '${componentName}',
    component: () => import('@/views/${componentName}/Index.vue'),
    children:[]
}`
}


export {
    vueTemplate,
    routerTemplate
}
