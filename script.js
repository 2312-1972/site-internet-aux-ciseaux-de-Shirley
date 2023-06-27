

let array = ["coiffeuse", "mixte", "créative"];
let wordIndex = 0;
let letterIndex = -1;
const createLetter = () => {
  const letter = document.createElement("span");
  target.appendChild(letter);

  letter.textContent = array[wordIndex][letterIndex];
  setTimeout(() => {
    letter.remove();
  }, 2800);
};
createLetter();
// setTimeout(() => {
//  letter.remove()
// }, 2800);

// setInterval(()=>{
//     letterIndex++;
//     createLetter()
// },200);

const loop = () => {
  setTimeout(() => {
    if (wordIndex >= array.length) {
      wordIndex = 0;
      letterIndex = -1;
      loop();
    } else if (letterIndex < array[wordIndex].length) {
      createLetter();
      letterIndex++;
      loop();
    } else {
      wordIndex++;
      letterIndex = 0;
      setTimeout(() => {
        loop();
      }, 2800);
    }
  }, 80);
};
loop();

