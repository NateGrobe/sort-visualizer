const root: HTMLElement = document.getElementById('root');

// radio buttons
const rb1Label: HTMLLabelElement = document.createElement('label');
rb1Label.setAttribute('for', 'rb1');
rb1Label.innerHTML = '25';
root?.appendChild(rb1Label);

const rb1: HTMLInputElement = document.createElement('input');
rb1.setAttribute('type', 'radio');
rb1.setAttribute('name', 'numBars');
rb1.setAttribute('id', 'rb1');
rb1.setAttribute('value', '25');
rb1.setAttribute('class', 'rb');
root?.appendChild(rb1)


const rb2Label: HTMLLabelElement = document.createElement('label');
rb2Label.setAttribute('for', 'rb2');
rb2Label.innerHTML = '50';
root?.appendChild(rb2Label);

const rb2: HTMLInputElement = document.createElement('input');
rb2.setAttribute('type', 'radio');
rb2.setAttribute('name', 'numBars');
rb2.setAttribute('id', 'rb2');
rb2.setAttribute('value', '50');
rb2.setAttribute('class', 'rb');
root?.appendChild(rb2)

const rb3Label: HTMLLabelElement = document.createElement('label');
rb3Label.setAttribute('for', 'rb3');
rb3Label.innerHTML = '100';
root?.appendChild(rb3Label);

const rb3: HTMLInputElement = document.createElement('input');
rb3.setAttribute('type', 'radio');
rb3.setAttribute('name', 'numBars');
rb3.setAttribute('id', 'rb3');
rb3.setAttribute('value', '100');
rb3.setAttribute('class', 'rb');
root?.appendChild(rb3)

// sort algorithm options
const algoSelect: HTMLSelectElement = document.createElement('select');
algoSelect.setAttribute('name', 'sort-options');
algoSelect.setAttribute('id', 'algo-select');
root?.appendChild(algoSelect);

const bubbleOption: HTMLOptionElement = document.createElement('option');
bubbleOption.setAttribute('value', 'bubble');
bubbleOption.innerHTML = 'Bubble sort';
algoSelect?.appendChild(bubbleOption);

const insertionOption: HTMLOptionElement = document.createElement('option');
insertionOption.setAttribute('value', 'insertion');
insertionOption.innerHTML = 'Insertion sort';
algoSelect?.appendChild(insertionOption);

// start button
const sort: HTMLButtonElement = document.createElement('button');
sort.innerHTML = 'Start';
sort.setAttribute('id', 'sortButton');
root?.appendChild(sort);

