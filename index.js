const words = [
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

const formattedWords = words.map((item) => {
  return item.toUpperCase();
});

document.querySelector('h1').innerHTML = words;
// document.getElementById('randomXmans').addEventListener('click', function () {
//   const word = words[Math.floor(Math.random() * words.length)];
// });

// Function changes color on h1 depending if song is palyed or paused
const chrismasSong = document.getElementById('chrismasSong');
chrismasSong.addEventListener('play', function () {
  document.querySelector('h1').style.color = `#115E0A`;
});

chrismasSong.addEventListener('pause', function () {
  document.querySelector('h1').style.color = `#000000`;
});

// Function that play and paused song and changed image depending if the song is palyed or paused
document.getElementById('icon').addEventListener('click', function () {
  if (chrismasSong.paused) {
    chrismasSong.play();
    icon.src = '/image/pause.svg';
  } else {
    chrismasSong.pause();
    icon.src = '/image/play.svg';
  }
});
