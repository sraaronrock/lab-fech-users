'use strict'

//FECH Y PETICION USUARIOS

window.addEventListener('load', function(){
    this.console.log("LOADED DOM");

    var div_usuarios = document.querySelector("#usuarios");
    var usuarios = [];

    fetch('https://jsonplaceholder.typicode.com/users')
        .then(data => data.json())
        .then(data => {
            usuarios = data;
            console.log(usuarios);

            usuarios.map((user, i) => {
                let nombre = document.createElement('h2');
                nombre.innerHTML = "<span style='color:red'>Nombre</span>: " + user.name + " ------ <span style='color:blue'>Usuario</span>: " + user.username;
                div_usuarios.appendChild(nombre);

                document.querySelector(".loading").style.display = 'none';
            });
        });
});
