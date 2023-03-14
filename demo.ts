function demo() : void {
    let input: HTMLInputElement = <HTMLInputElement>document.getElementById("fullname");
    let name: string = input.value ;
    let abc: string = "Hi, " + name + " :))))";

    let h: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById("result-content")
    h.innerHTML = abc;
}

export{};