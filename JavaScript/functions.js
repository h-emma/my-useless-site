// Make all the words in the array to upper case
const formattedWords = words.map((item) => {
  return item.toUpperCase();
});

// Function change words when mouse is over the text
const h1 = document.querySelector('h1');
h1.addEventListener('mouseover', function () {
  const word = words[Math.floor(Math.random() * words.length)];
  h1.textContent = word;
});
// Function change words when the text is touched
h1.addEventListener('touchend', function () {
  const word = words[Math.floor(Math.random() * words.length)];
  h1.textContent = word;
});

// Function make the chrismas tree dance when the mucis is palyed
const chrismasSong = document.getElementById('chrismasSong');
chrismasSong.addEventListener('play', function () {
  document.querySelector('.emoji').classList.add('dance');
});
// Function make the chrismas tree stop dance when the mucis is paused
chrismasSong.addEventListener('pause', function () {
  document.querySelector('.emoji').classList.remove('dance');
});

// Function that play and paused song and changed image depending if the song is palyed or paused, the song is on a loop
document.getElementById('icon').addEventListener('click', function () {
  if (chrismasSong.paused) {
    chrismasSong.loop = true;
    chrismasSong.play();
    icon.src = '/image/pause.svg';
  } else {
    chrismasSong.pause();
    icon.src = '/image/play.svg';
  }
});
