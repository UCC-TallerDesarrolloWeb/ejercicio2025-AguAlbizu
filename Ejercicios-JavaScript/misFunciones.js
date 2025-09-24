/**
 * Descripción
 * @method Nombre de la función
 * @param Parámetro A
 * @param Parámetro B
 * @return Valor que retorna
 */

function convertirUnidades(name, Valor) {
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
  document.getElementById("metro").value = metro;
  document.getElementById("pie").value = pie;
  document.getElementById("pulgada").value = pulgada;
  document.getElementById("yarda").value = yarda;
}
