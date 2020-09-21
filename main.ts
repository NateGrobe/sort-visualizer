let arr: number[] = [];
const canvas: HTMLCanvasElement = document.getElementById('canvas') as HTMLCanvasElement;
const context = canvas.getContext('2d');

// get sort button and set event listener
const sortButton: HTMLElement = document.getElementById('sortButton');
sortButton.addEventListener('click', handleStart);

// event handler for start button
function handleStart(): void {
  arr = [];

  const radioButtons = document.getElementsByName('numBars') as NodeListOf<HTMLInputElement>;

  let numItems: number;
  for(let i = 0; i < radioButtons.length; i++) {
    if (radioButtons[i].checked) {
      numItems = Number(radioButtons[i].value);
      break;
    }
  }

  for(let i = 1; i < numItems + 1; i++) {
    if (numItems === 25) {
      arr.push(i*20);
    } else if(numItems == 50) {
      arr.push(i*10);
    } else {
      arr.push(i*5);
    }
  }

  arr = shuffle(arr);

  drawState(arr, 999);

  const algoSelect: HTMLSelectElement = document.getElementById('algo-select') as HTMLSelectElement;
  const algo: string = algoSelect.options[algoSelect.selectedIndex].value;

  if(algo === 'bubble') {
    bubbleSort(arr);
  } else if (algo === 'insertion') {
    insertionSort(arr);
  }
}

function clear(): void {
  context.clearRect(0, 0, 500, 500);
}

function drawState(arr: number[], index: number): void {
  clear();
  const width: number = Math.floor((470 - (arr.length*2)) / arr.length);
  let start: number = 30;

  arr.forEach((n, i) => {
    context.beginPath();
    context.moveTo(start, 0);
    context.lineTo(start, n);
    context.closePath();

    context.lineWidth = width;
    context.strokeStyle = 'black';
    if(index === i) {
      context.strokeStyle = 'blue';
    }
    context.stroke();

    start += width + 2;
  });
}

// bootleg sleep function
const sleep = (delay: number) => new Promise((resolve) => setTimeout(resolve, delay));

function shuffle(A: number[]) {
  for(let i = A.length -1; i > 0; i--) {
    const j: number = Math.floor(Math.random() * (i + 1));
    const x: number = A[i];
    A[i] = A[j];
    A[j] = x;
  }

  return A
}

// sort functions
async function bubbleSort(A: number[]): Promise<void> {
  let loop: number = A.length;

  for(let i = 0; i < loop -1; i++) {
    let swapped: boolean = false;

    for(let j = 0; j < loop - 1; j++) {
      await sleep(4);

      if (A[j] > A[j+1]) {
        let tmp: number = A[j];
        A[j] = A[j+1];
        drawState(A, j);
        await sleep(4);
        A[j+1] = tmp;
        drawState(A, j+1);
        swapped = true;
      }
    }

    if(!swapped) {
      swoosh(A);
      break;
    }
  }
}

async function insertionSort(A: number[]): Promise<void> {
  for (let j = 1; j < A.length; j++) {
    const key: number = A[j];
    let i: number = j - 1;

    while(i >= 0 && A[i] > key) {
      await sleep(4);
      A[i+1] = A[i];
      drawState(A, i);
      i--;
    }
    A[i+1] = key;
    drawState(A, i+1);
    await sleep(4);
  }

  reverseSwoosh(A);
}

// functions to make nice visual flair
async function swoosh(A: number[]): Promise<void> {
  for (let i = 0; i < arr.length; i++) {
    drawState(A, i);
    await sleep(8);
  }
  drawState(A, 999);
}

async function reverseSwoosh(A: number[]): Promise<void> {
  for(let i = arr.length; i >= 0; i--) {
    drawState(A, i);
    await sleep(8);
  }
  drawState(A, 999);
}

