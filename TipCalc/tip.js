function calcTip() {
    let subtotalElem = document.getElementById('subtotal');
    var tipElem = document.getElementById("tip");
    var totalElem = document.getElementById('total');
    var subtotal = parseFloat(subtotalElem.value);
    var tip = parseFloat(tipElem.value)
    //var total = 100000;
    var total = subtotal + tip;
    totalElem.innerHTML = '$' + total;
}