let inputArray = [];
const getInput = async function () {
  const res = await fetch(
    "https://gist.githubusercontent.com/mistydb/6719dd5c05d3492d23fa00738374a657/raw/6c9ca1df3aa621a46e0a0eb620f3cbb053fd74b6/input01.txt"
  );
  const input = await res.text();
  function getElfCalories(input) {
    inputArray = input.split("\n\n").map((str) => str.split("\n").map(Number));
  }
  getElfCalories(input);

  let summedCalories = [];
  for (let e = 0; e < inputArray.length; e++) {
    summedCalories.push(inputArray[e].reduce((a, c) => a + c, 0));
  }
  console.log(Math.max(...summedCalories)); // answer to first part of challenge
  summedCalories.sort(function (a, b) {
    return b - a;
  });
  let topThree = summedCalories.slice(0, 3);
  console.log(topThree.reduce((a, c) => a + c, 0)); // answer to second part of challenge
};
getInput();
