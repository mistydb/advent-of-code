/*
trying to do this one without looking at anyone else's code.
after seeing this syntax in other people's code
for the past week, I figure I can start using it now
instead of fetching the data from a gist.
this is significantly easier.
*/

const fs = require("fs");

const data = fs
  .readFileSync("/src/input.txt")
  .toString() // because .split only works on strings
  .trim() // because .trim only works on strings
  .split("\n") // turns the data into an array, but the numbers are grouped "30373"
  .map((str) => str.trim().split("")); // removes whitespace, turns each number (still as a string) into an index of the array
console.log(data);

/*
we know that all of the outside trees are visible from the start
so, I want to initialize my count variable with the number of edge trees
the total edge tree count for the vertical sides is just data.length * 2
the total edge tree count for the horizontal trees has to be
less the vertical edge trees already counted, so (data[0].length - 2) * 2
 - this ended up being moot, because if I'm just iterating over every tree, it'll
 capture the edge trees as visible.
*/
// let count = data.length * 2 + (data[0].length - 2) * 2;
let visible = 0;

/* 
I want to check each tree (data[index]) against each other tree
in its row, and ultimately in its column. If the check encounters a taller tree
I want the loop to stop, because it's not visible. If the check
doesn't encounter a taller tree, then add 1 to count.
- after research, I think .every() is the best path forward, as well as splitting
the trees into different arrays so the current tree can be compared to each array
with trees to the right, to the left, up, and down. And the current tree only has 
to be taller than every tree in each array, to be visible.
*/

let treesRight = [];
let treesLeft = [];
let treesUp = [];
let treesDown = [];

// let r = 2;
// let c = 2;
// let tree = data[r][c];

function checkVisibility(r, c, data) {
  let tree = data[r][c];
  const isTallerThan = (currentValue) => currentValue < tree;
  treesRight = data[r].slice(c + 1);
  treesLeft = data[r].slice(0, c);
  treesUp = data.slice(0, r).map((row) => row[c]); // I eventually had to look this up
  treesDown = data.slice(r + 1).map((row) => row[c]); // also looked up.
  // console.log(treesRight);
  // console.log(treesLeft);
  // console.log(treesUp);
  // console.log(treesDown);
  return (
    treesRight.every(isTallerThan) ||
    treesLeft.every(isTallerThan) ||
    treesUp.every(isTallerThan) ||
    treesDown.every(isTallerThan)
  );
}

for (let r = 0; r < data.length; r++) {
  for (let c = 0; c < data[r].length; c++) {
    if (checkVisibility(r, c, data)) {
      visible += 1;
    }
  }
}

// checkVisibility(r, c, data);

// // checkVisibility(data);
// console.log(truthyArray);
console.log(visible);

/* 
Part one complete and correct! I had the thinking and logic mostly correct
but needed to review some other code (Kyle Shevlin's, 
mostly: https://github.com/kyleshevlin/advent-of-code-2022/blob/main/src/day-08/index.js)
to see which order I needed to put everything. I know my conceptualization of each piece
of the puzzle and where each should go will improve with more practice.
*/

/* 
Part two. Hmm.

I need to find the indexOf the first tree to the right, left, up, and down, that is 
equal to or greater than the current tree. 
Then, I need to get the number of trees visible in that direction by 
subtracting the indexOf firstTallerTree, from currentTree.
- Did not end up using this! Went with a more straightforward approach, seen in:
https://github.com/Tehuberjohn/advent-of-code/blob/main/2022/8/solution.js
*/

function checkScenicTrees(data) {
  let highest = 0;

  for (let r = 0; r < data.length; r++) {
    for (let c = 0; c < data[r].length; c++) {
      let tree = data[r][c];
      let visibleTreesLeft = 0;
      for (let i = c - 1; i >= 0; i--) {
        visibleTreesLeft++; // we can always see at least one tree in each direction
        if (data[r][i] >= tree) break; // if the tree is as tall as or taller, stop this loop
      }

      let visibleTreesRight = 0;
      for (let i = c + 1; i < data[r].length; i++) {
        visibleTreesRight++;
        if (data[r][i] >= tree) break;
      }

      let visibleTreesUp = 0;
      for (let i = r - 1; i >= 0; i--) {
        visibleTreesUp++;
        if (data[i][c] >= tree) break;
      }

      let visibleTreesDown = 0;
      for (let i = r + 1; i < data.length; i++) {
        visibleTreesDown++;
        if (data[i][c] >= tree) break;
      }

      let score =
        visibleTreesRight *
        visibleTreesLeft *
        visibleTreesUp *
        visibleTreesDown;
      // each tree gets a score
      if (score > highest) highest = score; // if this tree's current score is higher
      // than the highest tree's score we've found so far, make this the highest
    }
  }
  console.log(highest); // once we're done running through all trees, what was the highest?
}

checkScenicTrees(data);
