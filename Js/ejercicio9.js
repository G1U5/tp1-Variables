function mostrarVocalesEnFrase() {
  let frase = prompt("Ingresa una frase:");
  let vocalesEncontradas = [];

  for (let i = 0; i < frase.length; i++) {
    let caracter = frase.charAt(i);

    if ("aeiou".includes(caracter) && !vocalesEncontradas.includes(caracter)) {
      vocalesEncontradas.push(caracter);
    }
  }

  if (vocalesEncontradas.length > 0) {
    document.write(
      "Las vocales que aparecen en la frase son: " +
        vocalesEncontradas.join(", ")
    );
  } else {
    document.write("No se encontraron vocales en la frase ingresada.");
  }
}

mostrarVocalesEnFrase();
