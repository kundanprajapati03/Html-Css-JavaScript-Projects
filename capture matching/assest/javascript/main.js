let display = document.getElementById("heading");
let capture = document.getElementById("capture");
let input = document.getElementById("input");
let cap = "";

function generate() {
    cap = "";
    for (var i = 0; i < 6; i++) {
        var a = Math.floor(Math.random() * 10);
        cap += a;
    }
    capture.textContent = cap;
}

function check() {
    let inputt = input.value;
    if (cap == inputt) {
        display.innerHTML = "Capture Match !!"
    }
    else {
        display.innerHTML = "Error !!"
    }
}



