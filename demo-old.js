function demo () {
    let input = document.getElementById("fullname");
    let name = input.value ;

    let h = document.getElementById("result-content")
    h.innerHTML = name;
}