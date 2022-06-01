var scores = [98, 74, 85, 77, 93, 100, 89]
var total = 0;
for (var score in scores) {
  total += score;
  console.log(total);
}
var mean = total / scores.length
console.log(mean);