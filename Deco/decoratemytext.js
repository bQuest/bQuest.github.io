function display() {
    alert("Hello, world");
    document.getElementById('summary').style.fontSize = "24pt";
}

function popAlert(){
    alert('You changed me: ' + document.getElementById("blingCheckbox").name);
}
