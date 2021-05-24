function display() {
    alert("Hello, world");
    //document.getElementById('summary').style.fontSize = "24pt";
    let textArea = document.getElementById('summary');
    let size = parseInt(textArea.style.fontSize);
    textArea.style.fontSize = size + 2 + "px";
}

function popAlert(){
    alert('You changed me: ' + document.getElementById("blingCheckbox").name);
    let textArea = document.getElementById('summary');
    let fontWeight = textArea.style.fontWeight;
    let color = textArea.style.color;
    let textDecoration = textArea.style.textDecoration;
    let blingCheckbox = document.getElementById('blingCheckbox');
    if(blingCheckbox.checked) {
        textArea.style.fontWeight = 'bold';
        textArea.style.color = 'green';
        textArea.style.textDecoration = 'underline';
    } else {
        textArea.style.fontWeight = "";
        textArea.style.color = "";
        textArea.style.textDecoration = "";
    }
}
