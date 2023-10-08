function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const startButton = document.querySelector('button[data-start][type=button]');
const stopButton = document.querySelector('button[data-stop][type=button]');

var backgroundChangeActive = false;
var changeColorUntilStopped = null;

startButton.addEventListener('click', () => {
  backgroundChangeActive = true;
  startButton.disabled = true;

  changeColorUntilStopped = new Promise(function cb(resolve, reject) {
    setTimeout(() => {
      if (backgroundChangeActive) {
        let newBackgroundColor = getRandomHexColor();
        //console.log(newBackgroundColor);
        document.body.style.background = newBackgroundColor;
        cb(resolve, reject);
      } else {
        resolve('Koniec zmiany kolorów');
      }
    }, 1000);
  });
});

stopButton.addEventListener('click', () => {
  backgroundChangeActive = false;
  if (changeColorUntilStopped != null) {
    changeColorUntilStopped.then(value => {
      startButton.disabled = false;
      console.log(value);
    });
  }
});
