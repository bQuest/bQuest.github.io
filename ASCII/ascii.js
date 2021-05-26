"use strict";

window.onload = function() {
    document.getElementById('fontSizes').onchange = setTextAreaFontSize;
  
}

let start = document.getElementById('btnstart').onclick = function() {
    let textArea = document.getElementById('animationview');
    textArea.innerHTML = ANIMATIONS["Exercise"];
}

function setTextAreaFontSize() {
    let textArea = document.getElementById('animationview');
    let size = parseInt(document.getElementById('fontSizes').value);
    textArea.style.fontSize = size + 'pt';
}
