function obtenerFecha() {
  const fecha = new Date();
  const diasSemana = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
  ];
  const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];
  const textoFecha = `${diasSemana[fecha.getDay()]} ${fecha.getDate()} de ${
    meses[fecha.getMonth()]
  } de ${fecha.getFullYear()}`;

  const tituloFecha = document.querySelector("h2");
  const reloj = document.getElementById("tiempo");

  tituloFecha.innerText = textoFecha;

  let horas = fecha.getHours();
  const minutos = fecha.getMinutes().toString().padStart(2, "0");
  const segundos = fecha.getSeconds().toString().padStart(2, "0");

  let ampm;
  if (horas >= 12) {
    ampm = "PM";
  } else {
    ampm = "AM";
  }

  horas = horas % 12;
  horas = horas ? horas : 12;

  reloj.innerHTML = `${horas
    .toString()
    .padStart(2, "0")}:${minutos}:${segundos} ${ampm}`;
}

setInterval(obtenerFecha, 1000);
