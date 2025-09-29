function calcular(operacion) {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let resultado = document.getElementById("resultado");
    let operador = document.getElementById("operador");

    // Mostrar el signo en medio
    operador.textContent = operacion;

    let res;
    if (isNaN(num1) || isNaN(num2)) {
        resultado.value = "Error";
        return;
    }

    switch(operacion) {
        case '+':
            res = num1 + num2;
            break;
        case '-':
            res = num1 - num2;
            break;
        case '*':
            res = num1 * num2;
            break;
        case '/':
            res = num2 !== 0 ? num1 / num2 : "∞";
            break;
    }

    resultado.value = res;
}

function limpiarCampos() {
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("resultado").value = "";
    document.getElementById("operador").textContent = "?";
}
