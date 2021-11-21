var numbers = [1, 30, 4, 21, 100000];
numbers.sort(function(a, b) {
  console.log(a, b, a - b);
  return a - b;
});
console.log(numbers);
