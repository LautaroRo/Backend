const form = document.getElementById("form")
const input = document.getElementById("input")
const input1 = document.getElementById("input2")
const input2 = document.getElementById("input3")
const inputSearch = document.getElementById("inputSearch")
const mostrar = document.getElementById("mostrar")
let array = []

form.addEventListener("submit", (e) => {
	e.preventDefault()

	const id = Math.floor(Math.random() * 300)

	let info = {
		Nombre: input?.value,
		Stock: input1?.value,
		Descripcion: input2?.value,
		id: id
	}

	array.push(info)
	console.log(array)
	input.value = "";
	input1.value = "";
	input2.value = "";
});


inputSearch.addEventListener("input", (e) => {
	e.preventDefault()

	const searchValue = parseInt(inputSearch?.value)

	const filtrado = array.filter(element => element.id === searchValue)
	mostrarResultados(filtrado)
})

const mostrarResultados = (objetos) => {

	const resultContainer = document.getElementById("resultContainer");


	resultContainer.innerHTML = "";

	if (objetos.length > 0) {
		objetos.forEach(element => {
			const resultItem = document.createElement("div");
			resultItem.classList.add("divBusqueda")
			resultItem.innerHTML = `
			<ul>
			<li>ID: ${element.id}</li>
                                <li>Nombre: ${element.Nombre}</li>
                                <li>Stock: ${element.Stock}</li>
                                <li>Descripcion: ${element.Descripcion}</li> </ul>`;
			resultContainer.appendChild(resultItem);
		});
	} else {
		const resultItem = document.createElement("div");
		resultItem.innerHTML = "No se encontraron"
		resultContainer.appendChild(resultItem);
	}


	console.log(objetos)
}

mostrar.addEventListener("click", (e) => {
	e.preventDefault()

	const resultados = document.getElementById("show")

	resultados.innerHTML = ""


	if (array.length > 0) {
		array.forEach(element => {
			const result = document.createElement("div");
			result.innerHTML = `
			<ul>									<li>ID: ${element.id}</li>
			<li>Nombre: ${element.Nombre}</li>
			<li>Stock: ${element.Stock}</li>
			<li>Descripcion: ${element.Descripcion}</li> </ul> `
;
			resultados.appendChild(result);
		})
	} else {
		const result = document.createElement("div");
		result.innerHTML = "No Hay datos guardados"
		resultados.appendChild(result);
	}


})

