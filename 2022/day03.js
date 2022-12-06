// WHY IS PARSING DATA SO HARD?! :(
// I know I'm just a newbie coder and it will get easier.
// Even if I can get the logic of it, parsing the data just derails me.
// I mostly copied the code below, so I could get my totals.
// It makes sense to me, and follows the mental model I was forming, at least.

const priorities = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26,
    A: 27,
    B: 28,
    C: 29,
    D: 30,
    E: 31,
    F: 32,
    G: 33,
    H: 34,
    I: 35,
    J: 36,
    K: 37,
    L: 38,
    M: 39,
    N: 40,
    O: 41,
    P: 42,
    Q: 43,
    R: 44,
    S: 45,
    T: 46,
    U: 47,
    V: 48,
    W: 49,
    X: 50,
    Y: 51,
    Z: 52
  };
  
  let sumArr = [];
  
  let input = "";
  
  const getInput = async function () {
    const res = await fetch(
      "https://gist.githubusercontent.com/mistydb/08d9202b0b6d37f98b10839e98563a9a/raw/1570931a5ecf1a6982a675405dd97e79abcf5980/input03.txt"
    );
    input = await res.text();
  
    let arr = input.split("\n");
    arr.forEach((str) => {
      findSameLetter(str);
    });
  
    let answer = sumArr.reduce((acc, el) => {
      return acc + priorities[el];
    }, 0);
    console.log(answer);
  };
  
  function findSameLetter(str) {
    let halfIndex = str.length / 2;
    let firstHalf = Array.from(new Set(str.substring(0, halfIndex).split("")));
    let secondHalf = Array.from(
      new Set(str.substring(halfIndex, str.length).split(""))
    );
    firstHalf.forEach((letter) => {
      if (secondHalf.includes(letter)) {
        sumArr.push(letter);
      }
    });
  }
  
  getInput();
  
  let sumArray2 = [];
  
  const getInput2 = async function () {
    const res = await fetch(
      "https://gist.githubusercontent.com/mistydb/08d9202b0b6d37f98b10839e98563a9a/raw/1570931a5ecf1a6982a675405dd97e79abcf5980/input03.txt"
    );
    input = await res.text();
  
    let arr2 = input.split("\n");
    let bigArr = [];
    while (arr2.length > 0) {
      bigArr.push(arr2.splice(0, 3));
    }
  
    for (let arr of bigArr) {
      checkThreeArrs(arr[0], arr[1], arr[2]);
    }
    let answer2 = sumArray2.reduce((acc, el) => {
      return acc + priorities[el];
    }, 0);
    console.log(answer2);
  
    function checkThreeArrs(arr1, arr2, arr3) {
      let first = Array.from(new Set(arr1));
      let second = Array.from(new Set(arr2));
      let third = Array.from(new Set(arr3));
      first.forEach((letter) => {
        if (second.includes(letter) && third.includes(letter)) {
          sumArray2.push(letter);
        }
      });
    }
  };
  
  getInput2();
  