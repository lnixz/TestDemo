void function () {
    console.log('hello world');

}()

void function () {
    let start = window.performance.now();
    console.log('start: ' + start);
    for (let i = 0; i < 30000; i++) {
        console.log('i');
    }
    let end = window.performance.now()
    console.log('end: ' + end);
    console.log('end - start: ', end - start);
}()
