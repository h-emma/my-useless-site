const wordsArray = [
  'God Jul',
  'Merry Christmas',
  'Sretan Božić',
  'Glædelig Jul',
  'Vrolijk Kerstfeest',
  'Feliz Natal',
  'Craciun Fericit',
  'Nadolig Llawen',
  'Boldog Karácsonyt',
  'Frohe Weihnachten',
  'Veselé Vánoce',
  'Feliz Navidad',
  'срећан Божић',
  'счастливого Рождества',
];

const words = document.querySelector('h1');
window.onload = () => generateRandomWord(wordsArray);
addEventListener('keydown', () => generateRandomWord(wordsArray));
// function (){
//   const word = words[Math.floor(Math.random() * words.length)];
// }

// const words = document.querySelectorAll('h1');
// words.forEach((word) => {
//   word.addEventListener('keydown', () => {});

// });

// Function that
const chrismasSong = document.getElementById('chrismasSong');
document.getElementById('icon').addEventListener('click', function () {
  if (chrismasSong.paused) {
    chrismasSong.play();
    icon.src = '/image/pause.svg';
  } else {
    chrismasSong.pause();
    icon.src = '/image/play.svg';
  }
});
