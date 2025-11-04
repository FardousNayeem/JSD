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
  "Someone's downfall will feel suspiciously like justice.",
  "Even luck takes a day off. Today might be it.",
  "You are the plot twist someone deserves.",
  "The winds of change are coming. Bring a jacket."
];

const fortuneText = document.getElementById("fortuneText");
const prevBtn = document.getElementById("previousFortune");
let currentIndex = 0;

document.addEventListener("DOMContentLoaded", () => {
  currentIndex = Math.floor(Math.random() * fortunes.length);
  fortuneText.textContent = fortunes[currentIndex];
});

const themes = [
  {
    textColor: "#dc3545",
    bgColor: "#fff3cd",
    borderColor: "#198754",
    font: "'Georgia', serif"
  },
  {
    textColor: "#0d6efd",
    bgColor: "#cfe2ff",
    borderColor: "#6f42c1",
    font: "'Courier New', monospace"
  },
  {
    textColor: "#198754",
    bgColor: "#d1e7dd",
    borderColor: "#fd7e14",
    font: "'Arial', sans-serif"
  },
  {
    textColor: "#6f42c1",
    bgColor: "#f8d7da",
    borderColor: "#0d6efd",
    font: "'Trebuchet MS', sans-serif"
  }
];

function applyTheme(theme, button) {
  fortuneText.style.color = theme.textColor;
  fortuneText.style.backgroundColor = theme.bgColor;
  fortuneText.style.border = `3px solid ${theme.borderColor}`;
  fortuneText.style.fontFamily = theme.font;
  fortuneText.style.padding = "10px";
  button.style.backgroundColor = theme.textColor;
  button.style.color = "#fff";
}

for (let i = 1; i <= 4; i++) {
  const btn = document.getElementById(`theme${i}`);
  btn.addEventListener("click", () => applyTheme(themes[i - 1], btn));
}

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + fortunes.length) % fortunes.length;
  fortuneText.textContent = fortunes[currentIndex];
});
