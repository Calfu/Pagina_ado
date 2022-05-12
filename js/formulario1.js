function guardar() {
    alert("El perro se guardo correctamente");
}

$(document).ready(function () {
    $("#formulario1").validate({
        rules: {
            nombre: {
                required: true,
                minlength: 2
            },
            raza: {
                required: true,
                minlength: 2
            },
            vacunas: {
                required: true
            },
        },
        messages: {
            nombre: {
                required: "Ingrese algun nombre",
                minlength: "Minimo 2 caracteres"
            },
            raza: {
                required: "Ingrese alguna raza",
                minlength: "Minimo 2 caracteres"

            },
            vacunas: {
                required: "Ingrese un numero"
            },
        }
    });
});


