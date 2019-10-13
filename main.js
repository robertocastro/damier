// https://coolors.co

let colors = [
  [
    { code: '#1A1D26' },
    { code: '#223645' },
    { code: '#DCDCDC' },
    { code: '#FFF5EF' },
    { code: '#B83A1B' }
  ],
  [
    { code: '#28262C' },
    { code: '#998FC7' },
    { code: '#D4C2FC' },
    { code: '#F9F5FF' },
    { code: '#14248A' }
  ],
  [
    { code: '#1A1F16' },
    { code: '#1E3F20' },
    { code: '#345830' },
    { code: '#4A7856' },
    { code: '#94ECBE' }
  ]
];

let conteneurPalettes = document.getElementById('palettes');
let listePalettes = document.createElement('ul');
conteneurPalettes.appendChild(listePalettes);

for (colorPalette of colors) {
  let palette = document.createElement('li');
  palette.classList.add('palette');
  let itemListePalette = listePalettes.appendChild(palette);

  for (let [index, color] of colorPalette.entries()) {
    let colorItem = document.createElement('div');
    colorItem.style.backgroundColor = color.code;
    palette.appendChild(colorItem);
    colorItem.textContent = color.code;
  }
}

let canvasElement;
canvasElement = document.querySelector('#canvas');

var palettes = document.querySelectorAll('.palette');
palettes.forEach((palette, index) => {
  palette.addEventListener('click', function() {
    displayPalette(index);
  });
});

displayPalette = function(paletteIndex) {
  while (canvasElement.firstChild) {
    canvasElement.firstChild.remove();
  }

  palettes.forEach((palette, index) => {
    if (index === paletteIndex) {
      palette.style.border = '5px solid red';
    } else {
      palette.style.border = 'none';
    }
  });

  let i = 0;
  for (i = 0; i < 50; i++) {
    let color =
      colors[paletteIndex][
        Math.floor(Math.random() * colors[paletteIndex].length)
      ];
    let childElement = document.createElement('div');
    childElement.style.backgroundColor = color.code;
    childElement.classList.add('cell');
    canvasElement.appendChild(childElement);
  }
};
