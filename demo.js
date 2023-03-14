"use strict";
exports.__esModule = true;
function demo() {
    var input = document.getElementById("fullname");
    var name = input.value;
    var abc = "Hi, " + name + " :))))";
    var h = document.getElementById("result-content");
    h.innerHTML = abc;
}
