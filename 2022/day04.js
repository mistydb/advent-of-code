let input = [];
const getInput = async function () {
  const res = await fetch(
    "https://gist.githubusercontent.com/mistydb/203c465959676a7465d57e9625d38063/raw/0b2fa5fa9b5cb4658f2d4ce4a3cd1ced131897c3/input04.txt"
  );
  input = await res.text();

  let lines = input.split("\n");
  console.log(lines);
  let sum = 0;

  lines.forEach((line) => {
    let numbers = [
      line.split(",")[0].split("-")[0],
      line.split(",")[0].split("-")[1],
      line.split(",")[1].split("-")[0],
      line.split(",")[1].split("-")[1]
    ].map((num) => Number(num));

    // console.log(numbers);
    if (
      (numbers[0] <= numbers[2] && numbers[1] >= numbers[3]) ||
      (numbers[0] >= numbers[2] && numbers[1] <= numbers[3])
    ) {
      sum++;
    }
  });

  console.log(sum);

  let overlapSum = 0;
  lines.forEach((line) => {
    let numbers = [
      line.split(",")[0].split("-")[0],
      line.split(",")[0].split("-")[1],
      line.split(",")[1].split("-")[0],
      line.split(",")[1].split("-")[1]
    ].map((num) => Number(num));
    if (
      (numbers[0] <= numbers[2] && numbers[1] >= numbers[2]) ||
      (numbers[0] <= numbers[3] && numbers[1] >= numbers[3]) ||
      (numbers[0] <= numbers[2] && numbers[1] >= numbers[3]) ||
      (numbers[0] >= numbers[2] && numbers[1] <= numbers[3])
    ) {
      overlapSum++;
    }
  });
  console.log(overlapSum);
};

getInput();
