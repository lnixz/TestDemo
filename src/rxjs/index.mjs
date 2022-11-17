import { interval, mergeMap, of, map } from 'rxjs';

const letters = of('a', 'b', 'c');
const result = letters.pipe(
    mergeMap((x,i) => interval(1000).pipe(map(i => x + i)))
);

result.subscribe(x => {
    console.log(x);
    console.log('================================================================');
});
