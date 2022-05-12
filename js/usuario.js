function registrar() {
    alert("El usuario se registro correctamente");
}

$(document).ready(function () {
    $("#formulario_usuario").validate({
        rules: {
            "u_nombre":{
                required: true,
                minlength: 3
            },
            "u_apellido":{
                required: true,
                minlength: 3
            },
            "u_email": {
                required: true,
                email: true
            },
            "u_contraseña": {
                required: true,
                minlength: 4
            },
            "u_repetircontraseña": {
                required: true,
                equalTo: '#passuser'
            }
        }, // --> Fin de reglas
        messages: {
            "u_nombre":{
                required: 'Ingrese algun nombre',
                minlength: 'Minimo 3 caracteres'
            },
            "u_apellido":{
                required: 'Ingrese algun apellido',
                minlength: 'Minimo 3 caracteres'
            },

            "u_email": {
                required: 'Ingrese algun email',
                email: 'Error de sintaxis'
            },
            "u_contraseña": {
                required: 'Ingrese Contraseña',
                minlength: 'Minimo 4 caracteres'
            },
            "u_repetircontraseña": {
                required: 'Repita la contraseña',
                equalTo: 'Debe repetir la misma contraseña'
            }
        }
     
    });
});

