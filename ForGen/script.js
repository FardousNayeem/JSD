const fortunes = [
  "Congratulations! One of your enemies will perish.",
  "Wisdom is chasing you, but you are faster.",
  "Your enemies plot, but fate plots better.",
  "Soon, the universe will owe you a favor.",
  "A clever tongue will open the wrong door.",
  "When opportunity knocks, pretend you are not home.",
  "The stars see what you did. They are amused.",
  "Your silence will speak louder than your success.",
  "Someone will trip over their own karma. You will enjoy the view.",
  "A small act of pettiness will bring great satisfaction.",
  "The future smiles upon you, but with sharp teeth.",
  "Beware of those who agree with you too quickly.",
  "Today, you will win a battle no one else noticed.",
  "A secret wish will come true, and cause mild chaos.",
  "You are the storm someone prayed would pass.",
  "A fool will teach you something priceless, unintentionally.",
  "The universe is watching. Perform accordingly.",
  "The mirror sees your potential. It is slightly concerned.",
  "You will soon receive clarity or at least a louder hint.",
  "Someones downfall will feel suspiciously like justice.",
  "Even luck takes a day off. Today might be it.",
  "You are the plot twist someone deserves.",
  "The winds of change are coming. Bring a jacket."
];


const fortuneText = document.getElementById("fortuneText");
document.addEventListener("DOMContentLoaded", () => {
  const randomIndex = Math.floor(Math.random() * fortunes.length);
  fortuneText.textContent = fortunes[randomIndex];
});

const textColors = ["#dc3545", "#0d6efd", "#198754", "#6f42c1"];
const bgColors = ["#fff3cd", "#d1e7dd", "#cfe2ff", "#f8d7da"];
const borderColors = ["#198754", "#0d6efd", "#fd7e14", "#6f42c1"];
const fontFamilies = [
  "'Georgia', serif",
  "'Courier New', monospace",
  "'Arial', sans-serif",
  "'Trebuchet MS', sans-serif"
];
const fontNames = ["Georgia", "Courier", "Arial", "Trebuchet"];

const textBtn = document.getElementById("changeTextColor");
const bgBtn = document.getElementById("changeBackgroundColor");
const borderBtn = document.getElementById("changeBorderColor");
const fontBtn = document.getElementById("changeFontStyle");

function randomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

textBtn.addEventListener("click", () => {
  const color = randomItem(textColors);
  fortuneText.style.color = color;
  textBtn.style.backgroundColor = color;
  textBtn.style.color = "#fff";
});

bgBtn.addEventListener("click", () => {
  const color = randomItem(bgColors);
  fortuneText.style.backgroundColor = color;
  bgBtn.style.backgroundColor = color;
  bgBtn.style.color = "#000";
});

borderBtn.addEventListener("click", () => {
  const color = randomItem(borderColors);
  fortuneText.style.border = `3px solid ${color}`;
  fortuneText.style.padding = "10px";
  borderBtn.style.backgroundColor = color;
  borderBtn.style.color = "#fff";
});

fontBtn.addEventListener("click", () => {
  const font = randomItem(fontFamilies);
  const name = fontNames[fontFamilies.indexOf(font)];
  fortuneText.style.fontFamily = font;
  fontBtn.textContent = name;
  fontBtn.style.backgroundColor = "#e9ecef";
});
