let inputArray = [];
const getInput = async function () {
  const res = await fetch(
    "https://gist.githubusercontent.com/mistydb/673593c162c0f795b41415fddf76b90e/raw/1bc7646514c5fef35d62851f512333858c4ad00b/gistfile1.txt"
  );
  const input = await res.text();
  function matchUps(input) {
    inputArray = input.split("\n");
  }
  matchUps(input);
  console.log(inputArray);
  awardPoints(inputArray); //answer to first part
  updatedAwardPoints(inputArray); //answer to second part
};

function awardPoints(input) {
  let totalPoints = 0;
  for (let i = 0; i < input.length; i++) {
    switch (inputArray[i]) {
      case "A X":
        totalPoints += 4;
        break;
      case "A Y":
        totalPoints += 8;
        break;
      case "A Z":
        totalPoints += 3;
        break;
      case "B X":
        totalPoints += 1;
        break;
      case "B Y":
        totalPoints += 5;
        break;
      case "B Z":
        totalPoints += 9;
        break;
      case "C X":
        totalPoints += 7;
        break;
      case "C Y":
        totalPoints += 2;
        break;
      case "C Z":
        totalPoints += 6;
        break;
      default:
        totalPoints += 0;
    }
  }
  console.log(totalPoints);
}

function updatedAwardPoints(input) {
  let totalPoints2 = 0;
  for (let i = 0; i < input.length; i++) {
    switch (inputArray[i]) {
      case "A X":
        totalPoints2 += 3;
        break;
      case "A Y":
        totalPoints2 += 4;
        break;
      case "A Z":
        totalPoints2 += 8;
        break;
      case "B X":
        totalPoints2 += 1;
        break;
      case "B Y":
        totalPoints2 += 5;
        break;
      case "B Z":
        totalPoints2 += 9;
        break;
      case "C X":
        totalPoints2 += 2;
        break;
      case "C Y":
        totalPoints2 += 6;
        break;
      case "C Z":
        totalPoints2 += 7;
        break;
      default:
        totalPoints2 += 0;
    }
  }
  console.log(totalPoints2);
}

getInput();
