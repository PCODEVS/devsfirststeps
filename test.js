console.log("Imprimiendo que estoy manejando GIT")
const persona = {
    nombre: "Juan",
    edad: 30,
    genero: "Masculino",
    ocupacion: "Desarrollador",
    nacionalidad: "Española"
};

console.log(persona);
document.body.innerHTML = `<pre>${JSON.stringify(persona, null, 2)}</pre>`;