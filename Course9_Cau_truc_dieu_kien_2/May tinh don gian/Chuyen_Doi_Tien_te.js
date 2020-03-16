function press0() {
    document.getElementById("dauvao").value += 0;
}function press1() {
    document.getElementById("dauvao").value += 1;
}function press2() {
    document.getElementById("dauvao").value += 2;
}function press3() {
    document.getElementById("dauvao").value += 3;
}function press4() {
    document.getElementById("dauvao").value += 4;
}function press5() {
    document.getElementById("dauvao").value += 5;
}function press6() {
    document.getElementById("dauvao").value += 6;
}function press7() {
    document.getElementById("dauvao").value += 7;
}function press8() {
    document.getElementById("dauvao").value += 8;
}function press9() {
    document.getElementById("dauvao").value += 9;
}function pressCong() {
    document.getElementById("dauvao").value += "+";
}function pressTru() {
    document.getElementById("dauvao").value += "-";
}function pressNhan() {
    document.getElementById("dauvao").value += "*";
}function pressChia() {
    document.getElementById("dauvao").value += "/";
}function pressketqua() {
    let result = document.getElementById("dauvao").value;
    let resultfinal = eval(result);
    document.getElementById("dauvao").value = resultfinal;
}