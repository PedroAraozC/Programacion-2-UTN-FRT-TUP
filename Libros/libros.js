const titulo = document.getElementById("titulo");
const autor = document.getElementById("autor");
const estado = document.getElementById("alquilado");
const agregar = document.getElementById("agregar");
const btnactualizar = document.getElementById("actualizar");
const lista = document.getElementById("lista");

let aux;
mostrar();

async function actualizar() {
    if (titulo.value != "" && autor.value != "") {
        resp = await axios.put("http://localhost:3000/libro/" + aux, { titulo: titulo.value, autor: autor.value, alquilado: false });
    } else {
        alert("Para actualizar debe rellenar todos los datos");
    }
}

async function guardar() {
    if (titulo.value != "" && autor.value != "") {
        resp = await axios.post("http://localhost:3000/libro/", { titulo: titulo.value, autor: autor.value, alquilado: false })
            .then(function (resp) {
                alert("Se guardo correctamente el libro!");
            });
    } else {
        alert("Rellene todos los datos");
    }
}

async function mostrar() {
    resp = await axios.get("http://localhost:3000/libro");
    lista.innerHTML = "";

    resp.data.forEach(element => {
        lista.innerHTML +=
            '<button id="btnBorrar" onclick="borrar(' + element.id + ');">Borrar</button>' +
            '<button id="btnEditar" onclick="editar(' + element.id + ');">Editar</button>' + '<br>' +
            "Titulo: " + element.titulo + "<br>" +
            "Autor: " + element.autor + "<br>" +
            "Alquilado: " + element.alquilado + "<br>" +
            "ID: " + element.id + "<br><br>";
    });
}