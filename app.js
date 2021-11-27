const p1Display = document.querySelector("#p1Display");
const p2Display = document.querySelector("#p2Display");
const p1Btn = document.querySelector("#p1Button");
const p2Btn = document.querySelector("#p2Button");
const resetBtn = document.querySelector("#reset");
const select = document.querySelector("#playingTo");

let p1Score = 0;
let p2Score = 0;
let winningScore = 5;
let gameOver = false;


p1Btn.addEventListener('click', function(){
    if(!gameOver){
        p1Score += 1;
        p1Display.textContent = p1Score;
        if(p1Score === winningScore){
            p1Display.classList.add("winner");
            p2Display.classList.add("loser");
            gameOver = true;
            p1Btn.disabled = true;
            p2Btn.disabled = true;
        }
    }
})

p2Btn.addEventListener('click', function(){
    if(!gameOver){
        p2Score += 1;
        p2Display.textContent = p2Score;
        if(p2Score === winningScore){
            p2Display.classList.add("winner");
            p1Display.classList.add("loser");
            gameOver = true;
            p1Btn.disabled = true;
            p2Btn.disabled = true;
        }
    }
})

resetBtn.addEventListener('click', reset);

select.addEventListener('change', function(){
    winningScore = parseInt(this.value);
    reset();
})

function reset(){
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = p1Score;
    p2Display.textContent = p2Score;
    p1Display.classList.remove("winner", "loser");
    p2Display.classList.remove("winner", "loser");
    gameOver = false;
    p1Btn.disabled = false;
    p2Btn.disabled = false;
}