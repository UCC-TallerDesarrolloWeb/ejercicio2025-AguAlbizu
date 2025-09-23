/**
 * Descripción
 * @method Nombre de la función
 * @param Parámetro A
 * @param Parámetro B
 * @return Valor que retorna
 */

function convertirUnidades(unidad, Valor) {
  let metro, pie, pulgada, yarda;

  console.log(Valor);
  console.log(isNaN(Valor));

  if (isNaN(Valor)) {
    alert("El valor ingresado no es correcto");
    metro = "";
    pie = "";
    pulgada = "";
    yarda = "";
  } else {
    if (unidad == "unid_metro") {
      metro = Valor;
      pie = 3.28 * metro;
      pulgada = 39.37 * metro;
      yarda = 1.0936 * metro;
    } else if (unidad == "unid_pie") {
      pie = Valor;
      metro = 0.3048 * pie;
      pulgada = 12 * pie;
      yarda = 0.3333 * pie;
    } else if (unidad == "unid_pulgada") {
      // hacer conversion
    } else if (unidad == "unid_yarda") {
      // hacer conversion
      // hacer commit
    }
  }
  document.getElementById("metro").value = metro;
  document.getElementById("pie").value = pie;
  document.getElementById("pulgada").value = pulgada;
  document.getElementById("yarda").value = yarda;
}
