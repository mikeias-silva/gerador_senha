/**
* Gerador de senhas aleatórias usando fromCharCode() passando como parametros 
* numeros decimais da tabela ASCII. 
* Os caracteres possíveis serão Maiusculas, Minusculas, Numeros e Simbolos com um limitador de caracteres
*/


const rand = (min, max) => {
    return Number(Math.floor(Math.random() * (max - min) + min));
}

const geraMaiusculas = () => {
    //65 - 90 na tabela ASCII
    return String.fromCharCode(rand(65, 90));
}

const geraMinusculas = () => {
    //97, 122
    return String.fromCharCode(rand(97, 122));
}

const geraNumeros = () => {
    //48,57
    return String.fromCharCode(rand(48, 57))
}

const geraSimbolos = () => {
    //35, 41
    return String.fromCharCode(rand(35, 41))
}

export default function geradorSenha(qtd, maiusculas, minusculas, numeros, simbolos) {
    let senha = [];
    for (let contador = 0; contador < qtd; contador++) {
        maiusculas && senha.push(geraMaiusculas());
        minusculas && senha.push(geraMinusculas());
        numeros && senha.push(geraNumeros());
        simbolos && senha.push(geraSimbolos());
    }

    return senha.slice(0, qtd).join('');
};
