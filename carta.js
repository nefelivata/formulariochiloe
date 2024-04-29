function generarCarta() {
    var rut = document.getElementById('rut').value;
    var nombre = document.getElementById('nombre').value;
    var apellidop = document.getElementById('apellidop').value;
    var apellidom = document.getElementById('apellidom').value;
    var direccion = document.getElementById('direccion').value;
    var fechanacimiento = document.getElementById('fechanacimiento').value;
    var edad = document.getElementById('edad').value;
    var genero = document.getElementById('genero').value;
    var email = document.getElementById('email').value;
    var telefono = document.getElementById('telefono').value;
    var mensaje = document.getElementById('mensaje').value;

    // Concatenar los datos en formato de carta
    var cartaGenerada =
        "Mi nombre es " + nombre + " " + apellidop + " " + apellidom + ",\n" +
        "con Rut " + rut + ",\n\n" +

        "Domiciliado en " + direccion + ",\n" +
        "con Fecha de Nacimiento " + fechanacimiento + ",\n" +
        "tengo " + edad + " años de edad.\n\n" +

        "Mi género es " + genero + " y estoy interesado en trabajar con ustedes en este proyecto.\n" +
        "Por lo que le proporciono mis datos de contacto:\n" +
        "Email: " + email + ",\n" +
        "Teléfono Celular: " + telefono + ",\n\n" +

        "Mi principal motivación para postular es:\n" + mensaje;

    // Mostrar la carta en el campo de texto 'carta'
    document.getElementById('carta').value = cartaGenerada;
}