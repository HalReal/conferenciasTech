document.getElementById("registroForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let nombre = document.getElementById("nombre").value;
    let correo = document.getElementById("correo").value;
    let carrera = document.getElementById("carrera").value;
    let conferencias = document.querySelectorAll('input[name="conferencias"]:checked');

    if (nombre === "" || correo === "" || carrera === "" || conferencias.length === 0) {
        alert("Todos los campos son obligatorios.");
        return;
    }

    if (!correo.endsWith("@uam.edu.ni")) {
        alert("Debe usar su correo institucional (@uam.edu.ni).");
        return;
    }

    document.getElementById("mensajeConfirmacion").innerHTML = "<p>¡Registro exitoso! Nos vemos en las conferencias.</p>";
});