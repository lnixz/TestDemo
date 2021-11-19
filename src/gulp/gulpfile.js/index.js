const { series, parallel, src, dest } = require('gulp');

function clean(cb) {
    console.log(`clean`);
    cb();
}

function build(cb) {
    console.log(`build`);
    cb();
}

function transpile(cb) {
    console.log(`transpile`);
    cb();
}

function bundle(cb) {
    console.log(`bundle`);
    cb();
}

function javascript(cb) {
    console.log(`javascript`);
    cb();
}

function css(cb) {
    console.log(`css`);
    cb();
}

function streamTask() {
    return src(`*js`)
        .pipe(dest(`output`));
}

exports.streamTask = streamTask;
exports.default = series(
    clean,
    series(transpile, bundle),
    parallel(
        javascript,
        css
    ),
    build,
);


