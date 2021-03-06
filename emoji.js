// Get emojis from https://emojipedia.org/

const btn = document.getElementById("emoji-btn");
const emojis = [ 
    "๐",  "๐",  "๐คฃ",  "๐",  "๐",  "๐ค",  "๐คจ",  "๐",
    "๐",  "๐",  "๐",  "๐",  "๐คฅ",  "๐ด",  "๐ฅบ", "๐ง",
    "๐ค",  "๐คฉ",  "๐",  "๐ฅณ",  "๐",  "๐ฑ",  "๐ค", "๐ท",
    "๐ฅด",  "๐ณ",  "๐คฏ",  "๐คซ",  "๐ค",  "๐ช",  "๐ด", "๐ต","๐","๐ฅฐ"
];

btn.addEventListener("mouseover", () => {
  btn.innerText = emojis[Math.floor(Math.random() * emojis.length)];
});