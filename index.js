/* <div class="barBox bar1">
          
        </div> */

const barsDiv = document.getElementById("barsDiv");
const generateArrayBtn = document.getElementById("randomizeBtn");
const sortArrayBtn = document.getElementById("sortBtn");

var randomArr = [];

const setContent = (data) => {
  barsDiv.innerHTML = "";

  data.map((val) => {
    const barBox = document.createElement("div");
    barBox.innerHTML = `<span>${val}</span>
          <div class="bar" style="height: ${val}%"></div>`;
    barBox.classList.add("barBox");

    barsDiv.appendChild(barBox);
  });
};

const generateArray = () => {
  randomArr = [];
  for (let i = 0; i < 20; i++) {
    randomArr.push(Math.floor(Math.random() * 90) + 1);
  }

  setContent(randomArr);
};

const sortArray = async () => {
  const bar = document.querySelectorAll(".bar");
  const barArr = Array.from(bar);

  for (let i = 0; i < 20; i++) {
    for (let j = 0; j < 20 - i; j++) {
      await new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, 100);
      });
      if (randomArr[j] > randomArr[j + 1]) {
        let temp = randomArr[j];
        randomArr[j] = randomArr[j + 1];
        randomArr[j + 1] = temp;
      }
      setContent(randomArr);
    }

  }

  console.log(Array.from(barsDiv.innerHTML));
};

sortArrayBtn.addEventListener("click", () => {
  sortArray();
});

document.addEventListener("DOMContentLoaded", () => generateArray());
generateArrayBtn.addEventListener("click", () => generateArray());
