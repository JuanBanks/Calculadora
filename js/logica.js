var valor1 = "";
var valor2 = "";
var resultado;
var operador = "";
var del;

function reset() {
    document.getElementById("vista").value = 0;
    valor1 = "";
    operador = "";


}

function capturar(numero) {
    var aux = document.getElementById("vista").value;
    if (aux == "0") {
        document.getElementById("vista").value = numero;
    } else {
        document.getElementById("vista").value += numero;
    }
}

function punto() {
    if (!document.getElementById("vista").value.includes(".")) {
        document.getElementById("vista").value += ".";
    }
}

function operaciones(signo) {
    if (valor1 == "") {
        operador = signo;
        valor1 = parseFloat(document.getElementById("vista").value);
        console.log(valor1);
        document.getElementById("vista").value = "";
    } else {

        switch (signo) {
            case "+":
                operador = signo;
                valor2 = document.getElementById("vista").value;
                valor1 = parseFloat(valor1) + parseFloat(valor2);
                document.getElementById("vista").value = valor1;
                document.getElementById("vista").value = "";
                valor2 = "";
                console.log(valor1);
                break;
            case "-":
                operador = signo;
                valor2 = document.getElementById("vista").value;
                valor1 = parseFloat(valor1) - parseFloat(valor2);
                document.getElementById("vista").value = valor1;
                document.getElementById("vista").value = "";
                valor2 = "";
                break;
            case "x":
                operador = signo;
                valor2 = document.getElementById("vista").value;
                valor1 = parseFloat(valor1) * parseFloat(valor2);
                document.getElementById("vista").value = valor1;
                document.getElementById("vista").value = "";
                valor2 = "";
                break;
            case "/":
                operador = signo;
                valor2 = document.getElementById("vista").value;
                valor1 = parseFloat(valor1) / parseFloat(valor2);
                document.getElementById("vista").value = valor1;
                document.getElementById("vista").value = "";
                valor2 = "";
                break;
            default:
                resultado = valor1;
                break;
        }
    }
}

function calcular() {
    switch (operador) {
        case "+":
            resultado = valor1 + parseFloat(document.getElementById("vista").value);
            document.getElementById("vista").value = resultado.toLocaleString(
                "es-Co"
            );
            console.log(valor1);
            break;
        case "-":
            resultado = valor1 - parseFloat(document.getElementById("vista").value);
            document.getElementById("vista").value = resultado.toLocaleString(
                "es-Co"
            );
            break;
        case "x":
            resultado = valor1 * parseFloat(document.getElementById("vista").value);
            document.getElementById("vista").value = resultado.toLocaleString(
                "es-Co"
            );
            break;
        case "/":
            resultado = valor1 / parseFloat(document.getElementById("vista").value);
            document.getElementById("vista").value = resultado.toLocaleString(
                "es-Co"
            );
            break;
    }
}

function porcentaje() {

    valor1 = parseFloat(document.getElementById("vista").value);
    
        resultado = (valor1) / 100;
        document.getElementById("vista").value = resultado.toFixed(4);
     
}

function masoMenos() { 

    if (document.getElementById("vista").value != "") {

        let numero = parseFloat(document.getElementById("vista").value);

        numero= numero*-1;

        document.getElementById("vista").value= numero;
    }
  }

  function eliminar () {

    del = document.getElementById("vista").value;
    document.getElementById("vista").value = del.length;
    document.getElementById("vista").value = del.substr(0, del.length - 1);

  }