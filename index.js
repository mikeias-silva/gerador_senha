import geradorSenha from "./geradorSenha.js";
const btnSenha = document.querySelector('#nova-senha');
const senhaAleatoria = document.querySelector('#senha-aleatoria');
const chkMaiusculas = document.querySelector('#chk-maiusculas');
const chkMinusculas = document.querySelector('#chk-minusculas');
const chkNumeros = document.querySelector('#chk-numeros');
const chkSimbolos = document.querySelector('#chk-simbolos');
const qtdCaraceters = document.querySelector('#qtd-caracteres');

btnSenha.addEventListener("click", function () {

    if (qtdCaraceters.value < '4') {
        senhaAleatoria.innerHTML = 'Minimo 4 caracteres';
        return;
    }
    if (qtdCaraceters.value == '') {
        senhaAleatoria.innerHTML = 'Por favor informe a quantidade de caracteres!';
    } else {
        senhaAleatoria.innerHTML = geradorSenha(qtdCaraceters.value, chkMaiusculas.checked,
            chkMinusculas.checked, chkNumeros.checked, chkSimbolos.checked);
    }
});


