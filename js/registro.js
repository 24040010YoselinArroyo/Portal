document.addEventListener('DOMContentLoaded', function () {

  const btnCalcular = document.getElementById('calcular');
  const btnLimpiar = document.getElementById('limpiar');

  if (btnCalcular) btnCalcular.addEventListener('click', calcularNomina);
  if (btnLimpiar) btnLimpiar.addEventListener('click', limpiarCampos);

  function limpiarCampos() {
    const ids = ['idEmpleado','nombre','horas','costo','horasNormales','horasExtras','subtotal','ispt','monto'];
    ids.forEach(id => {
      const el = document.getElementById(id);
      if (el) el.value = '';
    });
  }
});

function calcularNomina() {
  const horas = parseFloat(document.getElementById("horas").value) || 0;
  const costo = parseFloat(document.getElementById("costo").value) || 0;

  let horasNormales = 0;
  let horasExtras = 0;

  if (horas > 40) {
    horasNormales = 40;
    horasExtras = horas - 40;
  } else {
    horasNormales = horas;
    horasExtras = 0;
  }

  const pagoNormal = horasNormales * costo;
  const pagoExtra = horasExtras * costo * 1.5;
  const subtotal = pagoNormal + pagoExtra;
  const ispt = subtotal * 0.10; 
  const monto = subtotal - ispt;

  const setIf = (id, value) => {
    const el = document.getElementById(id);
    if (el) el.value = value;
  };

  setIf("horasNormales", horasNormales);
  setIf("horasExtras", horasExtras);
  setIf("subtotal", subtotal.toFixed(2));
  setIf("ispt", ispt.toFixed(2));
  setIf("monto", monto.toFixed(2));
}


function calcularNomina() {
    let horas = parseFloat(document.getElementById("horas").value) || 0;
    let costo = parseFloat(document.getElementById("costo").value) || 0;

    let horasNormales = 0;
    let horasExtras = 0;

    if (horas > 40) {
        horasNormales = 40;
        horasExtras = horas - 40;
    } else {
        horasNormales = horas;
        horasExtras = 0;
    }

    let pagoNormal = horasNormales * costo;
    let pagoExtra = horasExtras * costo * 1.5;
    let subtotal = pagoNormal + pagoExtra;
    let ispt = subtotal * 0.10; 
    let monto = subtotal - ispt;

    document.getElementById("horasNormales").value = horasNormales;
    document.getElementById("horasExtras").value = horasExtras;
    document.getElementById("subtotal").value = subtotal.toFixed(2);
    document.getElementById("ispt").value = ispt.toFixed(2);
    document.getElementById("monto").value = monto.toFixed(2);
}

document.getElementById("nombre").addEventListener("input", function () {
    this.value = this.value.toUpperCase();
});

document.getElementById("idEmpleado").addEventListener("input", function () {
    this.value = this.value.replace(/[^a-zA-Z0-9]/g, "").toUpperCase();
});

document.getElementById("calcular").addEventListener("click", calcularNomina);
