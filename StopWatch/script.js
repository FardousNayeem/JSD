let time = 0;
let interval = null;
const display = document.getElementById("display");

const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const resetBtn = document.getElementById("resetBtn");

function updateDisplay() {
  display.textContent = time;
}

function startTimer() {
  if (!interval) {
    interval = setInterval(() => {
      time += 3;
      updateDisplay();
      if (time >= 30) {
        clearInterval(interval);
        interval = null;
        updateDisplay();
      }
    }, 1000);
  }
}

function stopTimer() {
  clearInterval(interval);
  interval = null;
}

function resetTimer() {
  stopTimer();
  time = 0;
  updateDisplay();
}

startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer);

updateDisplay();
