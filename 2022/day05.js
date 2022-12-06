// We need to move some crates, according to preset movements.
// Let's make each stack of crates into an array.
// I assume there's a way to do this with code, but I'm just gonna type it out.

let crates = [
    ["Z", "J", "G"],
    ["Q", "L", "R", "P", "W", "F", "V", "C"],
    ["F", "P", "M", "C", "L", "G", "R"],
    ["L", "F", "B", "W", "P", "H", "M"],
    ["G", "C", "F", "S", "V", "Q"],
    ["W", "H", "J", "Z", "M", "Q", "T", "L"],
    ["H", "F", "S", "B", "V"],
    ["F", "J", "Z", "S"],
    ["M", "C", "D", "P", "F", "H", "B", "T"]
  ];
  
  const getInput = async function () {
    const res = await fetch(
      "https://gist.githubusercontent.com/mistydb/ad9d4ac7d8457c90170222ccd1fcbbe0/raw/fffada572d9d27fef059afea433a8780f12c7ba8/input05.txt"
    );
    let input = await res.text();
  
    let movements = input.split("\n");
    console.log(movements);
  
    let mv = [];
  
    movements.forEach((row) => {
      let parsedInstructionsSplit = row
        .split("move ")
        .join("")
        .split(" from ")
        .join("-")
        .split(" to ")
        .join("-")
        .split("-");
      mv.push({
        amount: parsedInstructionsSplit[0],
        from: parsedInstructionsSplit[1],
        to: parsedInstructionsSplit[2]
      });
    });
    console.log(mv);
  
    function moveCrate(crates) {
      for (let m = 0; m < mv.length; m++) {
        let moves = Number(mv[m].amount);
        let indexCrateTo = Number(mv[m].from) - 1;
        let indexCrateFrom = Number(mv[m].to) - 1;
        for (let i = 0; i < moves; i++) {
          crates[indexCrateTo].push(crates[indexCrateFrom].pop());
        }
      }
    }
  
    moveCrate(crates);
    getAnswer();
  };
  
  function getAnswer() {
    console.log(
      crates[0][crates[0].length - 1],
      crates[1][crates[1].length - 1],
      crates[2][crates[2].length - 1],
      crates[3][crates[3].length - 1],
      crates[4][crates[4].length - 1],
      crates[5][crates[5].length - 1],
      crates[6][crates[6].length - 1],
      crates[7][crates[7].length - 1],
      crates[8][crates[8].length - 1]
    );
  }
  getInput();
  