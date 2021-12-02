// const words = [
//   'God Jul',
//   'Merry Christmas',
//   'Sretan Božić',
//   'Glædelig Jul',
//   'Vrolijk Kerstfeest',
//   'Feliz Natal',
//   'Craciun Fericit',
//   'Nadolig Llawen',
//   'Boldog Karácsonyt',
//   'Frohe Weihnachten',
//   'Veselé Vánoce',
//   'Feliz Navidad',
//   'срећан Божић',
//   'счастливого Рождества',
// ];

// const words = document.querySelectorAll('h1');
// words.forEach((word) => {
//   word.addEventListener('keydown', () => {
//     window.alert(`Yes, you are ${qouteSpan.textContent}`);
//   });
// });

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

const button = document.querySelector('button');
button.addEventListener('click', () => {
  window.alert('You are doing amazing, sweetie!');
});
