let winningPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
let resetbtn = document.querySelector("#reset-btn");
let newgame = document.querySelector("#newgame");
let boxes = document.querySelectorAll(".box");
let highlight = document.querySelector(".highlight");
highlight.classList.add("display");
let verdict = document.getElementById("verdict");
let playerX = true;

//to disable all buttons after completion of game
let btndisable = () => {
  boxes.forEach((box) => (box.disabled = true));
};
let btnenable = () => {
  boxes.forEach((box) => (box.disabled = false));
};

//logic check for winner
const checkWinner = () => {
  for (let pattern of winningPatterns) {
    let box1Val = boxes[pattern[0]].innerText;
    let box2val = boxes[pattern[1]].innerText;
    let box3Val = boxes[pattern[2]].innerText;
    if (box1Val != "" && box2val != "" && box3Val != "") {
      if (box1Val == box2val && box2val == box3Val) {
        highlight.classList.remove("display");
        if (box1Val == "X") {
          verdict.innerText = "🎉 Congratulations!!! Player A Won";
          //console.log("🎉 Congratulations!!! Player A Won 😱🔥");
        } else {
          verdict.innerText = "🎉 Congratulations!!! Player B Won ";
          //console.log("🎉 Congratulations!!! Player B Won ");
        }
        btndisable();
      }
    }
  }
};

//main function to add  X and O
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (playerX) {
      box.innerText = "X";
      playerX = false;
    } else {
      box.innerText = "O";
      playerX = true;
    }
    box.disabled = true;
    checkWinner();
  });
});

let resetting = () => {
  boxes.forEach((box) => (box.innerText = ""));
  playerX = true;
};
resetbtn.addEventListener("click", () => {
  highlight.classList.add("display");
  btnenable();
  resetting();
});
newgame.addEventListener("click", () => {
  highlight.classList.add("display");
  btnenable();
  resetting();
});
let isDraw = true;
boxes.forEach((box) => {
  if (box.innerText == "") {
    isDraw = false;
  }
});
if (isDraw && highlight.classList.contains("display")) {
  highlight.classList.remove("display");
  verdict.innerText = "😐 It's a Draw!";
}
