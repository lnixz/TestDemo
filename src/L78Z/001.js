const points = ['10', '20', '30']
function mounted(binding) {
    console.log(binding);
    const flag = ((points, ...values) => {
        console.log('values: ', values);
        console.log('values.flat(): ', values.flat());
        const list = values.flat(Infinity).filter((v) => points.includes(v))
        return list.length > 0
    })(points, binding)
    console.log(flag);
}
mounted(['10', '20'])
mounted('30')