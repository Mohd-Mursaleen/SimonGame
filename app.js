let start = false;
let gameSeq = [];
let userSeq = [];
let level = 0;
let baseScore = 0;

let blue = document.querySelector(".blue");
let green = document.querySelector(".green");
let red = document.querySelector(".red");
let yello = document.querySelector(".yellow");
let h2 = document.querySelector("h2");
addEventListener("keypress", startGame);

document.addEventListener("touchstart", startGame);
// blue.addEventListener("click",function(){
//     console.log("meow");
//     blue.style.backgroundColor="white"
// })
function startGame() {
  if (!start) {
    console.log("Game Started");
    start = true;
    levelUp();
  }
}
function levelUp() {
  userSeq = [];
  level++;
  h2.innerText = "Level " + level;
  let color = ["red", "green", "blue", "yellow"];
  let randIdx = Math.floor(Math.random() * 3);
  let randColor = color[randIdx];
  gameSeq.push(randColor);

  let randBtn = document.querySelector(`.${randColor}`);

  gameflashBtn(randBtn);
}

function takeInput() {
  let allBtns = document.querySelectorAll(".btn");
  for (btn of allBtns) {
    btn.addEventListener("click", btnPress);
  }
}
function btnPress() {
  let btn = this;

  userflashBtn(btn);
  userColor = btn.getAttribute("id");
  userSeq.push(userColor);

  checkAns(userSeq.length - 1);
}
function checkAns(idx) {
  if (gameSeq[idx] === userSeq[idx]) {
    if (gameSeq.length == userSeq.length) {
      setTimeout(levelUp, 1000);
    }
  } else {
    h2.innerHTML =
      "Game Over ! Your Score was <b>" +
      level +
      "</b> , Press any key to restart";

    document.getElementById("cont").style.backgroundColor = "red";
    setTimeout(function () {
      document.getElementById("cont").style.backgroundColor = "#98DFAF";
    }, 250);
    highScore();
  }
}
function highScore() {
  let h4 = document.querySelector("h4");

  if (level > baseScore) {
    console.log("here");
    h4.innerText = level;
    baseScore = level;
  }
  reset();
}
function gameflashBtn(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 1000);
  takeInput();
}
function userflashBtn(btn) {
  btn.classList.add("greeen");
  setTimeout(function () {
    btn.classList.remove("greeen");
  }, 250);
}
function reset() {
  level = 0;
  start = false;
  gameSeq = [];
  userSeq = [];
}
// userflashBtn(event.target);
//         let count =0;
//             console.log(gameSeq)
//             console.log(event.ge)
//            if (event.target==(document.querySelector(`.${gameSeq[count++]}`)))
//             {
//                 console.log("right")
//                 if(gameSeq.length==count)
//                 {
//                     count=0;
//                     levelUp();
//                 }

//             }
//             else
//             {
//                 console.log("wrong")

//             }
// function flash(Seq)
// {
//  for(k=0;k<Seq.length;k++)
//  {
//    Seq[k].style.backgroundColor="white";
//  }

// }

// function btnpress(event)
// {

// }
