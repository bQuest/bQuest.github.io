function delayMsg() {
    setTimeout(booyah, 5000);
    document.getElementById("output").innerHTML = "Wait for it...";
}
function booyah() {
    // called when the timer goes off 
    document.getElementById("output").innerHTML = "BOOYAH!";
}
