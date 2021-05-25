window.onload = function() {
    document.getElementById('summary').onclick = display;
};

function display() {
    'Use Strict'
    //alert("Hello, world");
    //document.getElementById('summary').style.fontSize = "24pt";
    // let textArea = document.getElementById('summary');
    // let size = parseInt(textArea.style.fontSize);
    // textArea.style.fontSize = size + 2 + "px";
    var elem = document.getElementById('summary');
    console.log(window.getComputedStyle(elem, null).getPropertyValue('font-size'));
    let size = document.getElementById('summary').style.fontSize;
    console.log(size);


    // var el = document.getElementById('foo');
    // var style = window.getComputedStyle(el, null).getPropertyValue('font-size');
    // var fontSize = parseFloat(style);
    // // now you have a proper float for the font size (yes, it can be a float, not just an integer)
    // el.style.fontSize = (fontSize + 1) + 'px';
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
