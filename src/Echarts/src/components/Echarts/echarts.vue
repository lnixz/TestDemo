<template>
    <div class="chart">
        <div ref="dom" :style="style"></div>
    </div>
</template>

<script setup lang="ts">
import * as $echarts from "echarts"
import { ref, reactive, toRefs, computed, watch, defineProps, withDefaults, onMounted, h } from 'vue'
interface Props {
    width?: string;
    height?: string;
    options: object;
}
const props = withDefaults(defineProps<Props>(), {
    width: '80%',
    height: '80vh',
    options: () => ({
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                data: [150, 230, 224, 218, 135, 147, 260],
                type: 'line'
            }
        ]
    })
})
const { width, height, options } = toRefs(props)
const style = computed(() => ({ width: width.value, height: height.value }))
const dom = ref(null)
const echartsInstance: any = ref(null)
function init() {
    // 基于准备好的dom，初始化echarts实例
    if (!echartsInstance.value) {
        echartsInstance.value = options.value && $echarts.init(dom.value as unknown as HTMLElement)
    }
    // 使用配置项和数据显示图表。
    options.value && echartsInstance.value.setOption(options.value)
}
onMounted(() => {
    init()
})
watch(options, () => {
    init()
})

</script>

<style scoped>
.chart {
    display: flex;
    justify-content: center;
    align-items: center;

    position: relative;
    width: 100%;
    height: 100%;
}
</style>
