/**
 * Conversion de unidades, de metros, yardas, pies y pulgadas.
 * @method convertirUnidades
 * @param {string} name - name de los inputs de metros, yardas, pies y pulgadas
 * @param {number} Valor - El valor de los inputs de metros, yardas, pies y pulgadas
 * @return
 */

function convertirUnidades(name, Valor) {
  let metro, pie, pulgada, yarda;

  if (Valor.includes(",")) {
    Valor = Valor.replace(",", ".");
  }

  console.log(Valor);
  console.log(isNaN(Valor));

  if (isNaN(Valor)) {
    alert("El valor ingresado no es correcto");
    metro = "";
    pie = "";
    pulgada = "";
    yarda = "";
  } else {
    if (name == "unid_metro") {
      metro = Valor;
      pie = 3.28 * metro;
      pulgada = 39.37 * metro;
      yarda = 1.0936 * metro;
    } else if (name == "unid_pulgada") {
      pulgada = Valor;
      metro = 0.0254 * pulgada;
      pie = 0.083 * pulgada;
      yarda = 0.0277 * pulgada;
    } else if (name == "unid_pie") {
      pie = Valor;
      metro = 0.3048 * pie;
      pulgada = 12 * pie;
      yarda = 0.3333 * pie;
    } else if (name == "unid_yarda") {
      yarda = Valor;
      metro = 0.914 * yarda;
      pie = 3 * yarda;
      pulgada = 36 * yarda;
    }
  }
  document.getElementById("metro").value = Math.round(metro * 100) / 100;
  document.getElementById("pie").value = Math.round(pie * 100) / 100;
  document.getElementById("pulgada").value = Math.round(pulgada * 100) / 100;
  document.getElementById("yarda").value = Math.round(yarda * 100) / 100;
}

function convertirGR(id, valor) {
  let grad, rad;

  console.log(valor);
  console.log(isNaN(valor));

  if (isNaN(valor)) {
    alert("El valor ingresado no es correcto");
    grad = "";
    rad = "";
  } else {
    if (id == "grados") {
      grad = valor;
      rad = (grad * Math.PI) / 180;
    } else if (id == "radianes") {
      rad = valor;
      grad = (rad * 180) / Math.PI;
    }
  }
  document.getElementById("grados").value = grad;
  document.getElementById("radianes").value = rad;
}

function mostrar_ocultar(valorMO) {
  if (valorMO == "val_mostrar") {
    document.getElementById("divMO").style.display = "block";
  } else if (valorMO == "val_ocultar") {
    document.getElementById("divMO").style.display = "none";
  }
}

function calcularsuma() {
  let n1, n2;

  n1 = Number(document.getElementsByName("sum_num1")[0].value);
  n2 = Number(document.getElementsByName("sum_num2")[0].value);
  document.getElementsByName("sum_total")[0].innerHTML = n1 + n2;
}

function calcularresta() {
  let n1, n2;

  n1 = Number(document.getElementsByName("res_num1")[0].value);
  n2 = Number(document.getElementsByName("res_num2")[0].value);
  document.getElementsByName("res_total")[0].innerHTML = n1 - n2;
}

function calcularmultiplicacion() {
  let n1, n2;

  n1 = Number(document.getElementsByName("mul_num1")[0].value);
  n2 = Number(document.getElementsByName("mul_num2")[0].value);
  document.getElementsByName("mul_total")[0].innerHTML = n1 * n2;
}

function calculardivision() {
  let n1, n2;

  n1 = Number(document.getElementsByName("div_num1")[0].value);
  n2 = Number(document.getElementsByName("div_num2")[0].value);
  document.getElementsByName("div_total")[0].innerHTML = n1 / n2;
}
