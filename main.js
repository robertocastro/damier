let colors = [
  { code: '#1A1D26' },
  { code: '#223645' },
  { code: '#DCDCDC' },
  { code: '#FFF5EF' },
  { code: '#B83A1B' }
];
let childElement, appendChildElement, parentElement;
parentElement = document.getElementById('canvas');

let i = 0;
for (i = 0; i < 50; i++) {
  let color = colors[Math.floor(Math.random() * colors.length)];
  childElement = document.createElement('div');
  childElement.style.backgroundColor = color.code;
  childElement.classList.add('cell');
  appendChildElement = parentElement.appendChild(childElement);
}
