const generateBtn = document.getElementById("generateBtn");
const sortBtn = document.getElementById("sortBtn");

const n = 20;
const arr = [];

// Initializing.
init();

function init() {
  for (let i = 0; i < n; i++) {
    arr[i] = Math.floor(Math.random() * 90) + 1;
  }
  showBars();
}

// Function to show bars on web page.
function showBars(i, isGreen) {
  const barsContainer = document.querySelector("#barsContainer");
  barsContainer.innerHTML = "";
  arr.forEach((val, index) => {
    const bar = document.createElement("div");
    bar.style.height = `${val}%`;
    if (bar.style.background != "green") bar.classList.add("bar");

    if (index == i) bar.style.background = "red";
    if (index == i && isGreen) bar.classList.add("green");

    barsContainer.appendChild(bar);
  });
}

// Handling generate button.
generateBtn.addEventListener("click", () => init());

// Function to perform sorting.
async function sortArray() {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, 100)
      );

      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;

        showBars(j + 1, false);
      }
    }

    showBars(arr.length - i - 1, true);
  }

  const bars = document.querySelectorAll(".bar");
  Array.from(bars).forEach((bar) => bar.classList.add("green"));
}

// Handling sort function.
sortBtn.addEventListener("click", () => {
  sortArray();
});
