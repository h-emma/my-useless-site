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

// const words = document.querySelector('h1');
// document.getElementById('randomXmans').addEventListener('click', function () {
//   const word = words[Math.floor(Math.random() * words.length)];
// });

// Function let the user know that the music is palyed och paused with a window alert
const chrismasSong = document.getElementById('chrismasSong');
chrismasSong.addEventListener('play', function () {
  alert('The music is playing');
});

chrismasSong.addEventListener('pause', function () {
  alert('The music has been paused');
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
