const titulo = document.getElementById("titulo");
const autor = document.getElementById("autor");
const estado = document.getElementById("estado");
const agregar = document.getElementById("agregar");
const actualizar = document.getElementById("actualizar");
const lista = document.getElementById("lista");
let aux;

aux = await axios.get("http://localhost:3000/libro", { alquilado: alquilado.value });

mostrar()

async function guardar() {
    resp = await axios.post("http://localhost:3000/libro", { titulo: titulo.value, autor: autor.value, alquilado: alquilado.value })

        .then(function (resp) {
            alert("¡Libro guardado!")
        })
}

async function mostrar() {
    resp = await axios.get("http://localhost:3000/libro")
    lista.innerHTML = ""
    resp.data.forEach(element => {

        lista.innerHTML +=
        '<button onclick="borrar('+ element.id +');">Borrar<button>' +
        '<button onclick="editar('+ element.id +');">Editar<button>' +
        element.titulo + " " + element.autor + " " + element.alquilado + "<br>";

    });
}
async function borrar(id){
    await axios.delete("http://localhost:3000/libro/" + id)
}