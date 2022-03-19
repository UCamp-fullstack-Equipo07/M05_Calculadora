const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", mobileMenu);
navLink.forEach(n => n.addEventListener("click", closeMenu));

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

function obtain1() {
    let number1 = document.getElementById('one').value;
    let resultado = document.getElementById('result');
    let cadena = String(resultado.value) + String(number1);
    resultado.value = cadena;
}

function obtain2() {
    let number2 = document.getElementById('two').value;
    let resultado = document.getElementById('result');
    let cadena = String(resultado.value) + String(number2);
    resultado.value = cadena;
}

function obtain3() {
    let number3 = document.getElementById('three').value;
    let resultado = document.getElementById('result');
    let cadena = String(resultado.value) + String(number3);
    resultado.value = cadena;
}

function obtain4() {
    let number4 = document.getElementById('four').value;
    let resultado = document.getElementById('result');
    let cadena = String(resultado.value) + String(number4);
    resultado.value = cadena;
}

function obtain5() {
    let number5 = document.getElementById('five').value;
    let resultado = document.getElementById('result');
    let cadena = String(resultado.value) + String(number5);
    resultado.value = cadena;
}

function obtain6() {
    let number6 = document.getElementById('six').value;
    let resultado = document.getElementById('result');
    let cadena = String(resultado.value) + String(number6);
    resultado.value = cadena;
}

function obtain7() {
    let number7 = document.getElementById('seven').value;
    let resultado = document.getElementById('result');
    let cadena = String(resultado.value) + String(number7);
    resultado.value = cadena;
}

function obtain8() {
    let number8 = document.getElementById('eight').value;
    let resultado = document.getElementById('result');
    let cadena = String(resultado.value) + String(number8);
    resultado.value = cadena;
}

function obtain9() {
    let number9 = document.getElementById('nine').value;
    let resultado = document.getElementById('result');
    let cadena = String(resultado.value) + String(number9);
    resultado.value = cadena;
}

function obtainSummar() {
    let summ = document.getElementById('summar').value;
    let resultado = document.getElementById('result');
    let cadena = String(resultado.value) + String(summ);
    resultado.value = cadena;
}

function obtainSubstract() {
    let subs = document.getElementById('substract').value;
    let resultado = document.getElementById('result');
    let cadena = String(resultado.value) + String(subs);
    resultado.value = cadena;
}

function obtainMultiply() {
    let mult = document.getElementById('multiply').value;
    let resultado = document.getElementById('result');
    let cadena = String(resultado.value) + String(mult);
    resultado.value = cadena;
}

function obtainDivide() {
    let div = document.getElementById('divide').value;
    let resultado = document.getElementById('result');
    let cadena = String(resultado.value) + String(div);
    resultado.value = cadena;
}

function obtainDot() {
    let d = document.getElementById('dot').value;
    let resultado = document.getElementById('result');
    let cadena = String(resultado.value) + String(d);
    resultado.value = cadena;
}

function obtain0() {
    let number0 = document.getElementById('zero').value;
    let resultado = document.getElementById('result');
    let cadena = String(resultado.value) + String(number0);
    resultado.value = cadena;
}

function obtainReset() {
    let resultado = document.getElementById('result');
    resultado.value = "";
}

function obtainEqual() {
    let resultado = document.getElementById('result');
    let cadena = String(resultado.value);
    console.log(cadena);
    console.log(eval(cadena));
    resultado.value = String(eval(cadena));
}

function obtainTakeOf() {
    let resultado = document.getElementById('result').value;
    let res = String(resultado);
    console.log(res);
    let newResult = res.substring(0, res.length - 1);
    console.log(newResult);
    res.value = String(newResult);
}