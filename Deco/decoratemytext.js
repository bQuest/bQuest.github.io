window.onload = function () {
    document.getElementById('increaseFont').onclick = display;
};

function increaseFont() {
    //alert("Hello, world");
    let textArea = document.getElementById('summary');
    let size = parseInt(window.getComputedStyle(textArea, null).getPropertyValue('font-size'));
    textArea.style.fontSize = size + 2 + "px";
}

function display() {
    setInterval(increaseFont, 500);
}

function popAlert() {
    alert('You changed me: ' + document.getElementById("blingCheckbox").name);
    let textArea = document.getElementById('summary');
    let fontWeight = textArea.style.fontWeight;
    let color = textArea.style.color;
    let textDecoration = textArea.style.textDecoration;
    let blingCheckbox = document.getElementById('blingCheckbox');
    if (blingCheckbox.checked) {
        textArea.style.fontWeight = 'bold';
        textArea.style.color = 'green';
        textArea.style.textDecoration = 'underline';
        document.body.style.backgroundImage = "URL('http://www.cs.washington.edu/education/courses/190m/CurrentQtr/labs/6/hundred-dollar-bill.jpg')";
    } else {
        textArea.style.fontWeight = "";
        textArea.style.color = "";
        textArea.style.textDecoration = "";
    }
}

function replaceWords() {

}
