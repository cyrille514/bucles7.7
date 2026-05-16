document.getElementById('verificar').addEventListener('click', function() {
    // Obtener el valor del input
    const input = document.getElementById('numero').value;
    const resultadoDiv = document.getElementById('resultado');

    // Validar que el campo no esté vacío
    if (input === '') {
        resultadoDiv.textContent = 'Por favor, introduce un número.';
        resultadoDiv.className = 'mt-6 text-center font-semibold text-lg text-yellow-600 block';
        return;
    }

    // Convertir el número a texto para evaluar sus caracteres
    const texto = input.toString();
    const largo = texto.length;
    let esCapicua = true;

    // Bucle for para comparar los extremos opuestos
    for (let i = 0; i < largo / 2; i++) {
        if (texto[i] !== texto[largo - 1 - i]) {
            esCapicua = false; // Se detectó una diferencia
            break; // Termina el bucle antes de tiempo
        }
    }

    // Mostrar el resultado en pantalla con estilos condicionales de Tailwind
    if (esCapicua) {
        resultadoDiv.textContent = `¡El número ${input} es capicúa!`;
        resultadoDiv.className = 'mt-6 text-center font-semibold text-lg text-green-600 block';
    } else {
        resultadoDiv.textContent = `El número ${input} no es capicúa.`;
        resultadoDiv.className = 'mt-6 text-center font-semibold text-lg text-red-600 block';
    }
});

