// array di oggetti delle icone stampate 
let icone = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	}
];


let select = document.getElementById("membership") //seleziono il menù a tendina 
let container = document.querySelector(".row"); //seleziono il container nel quale andranno le card


function printIcons(){

	container.innerHTML = ""; // svuoto il container dalle card 

	// ciclo per entrare in ogni singolo oggetto 
	icone.forEach((icona) => {
		if(select.value == icona.type || select.value == "all" ){ // 

			let classColor = "" // dichiaro la varbile che conterrà la classe css che vorremmo introdurre nella variabile card

			//condizioni con le quali inserisco le classi per i colori
			if(icona.type=="user"){
				classColor = "user_color"
			}
			else if(icona.type=="vegetable"){
				classColor = "vegetable_color" 
			}
			else if(icona.type=="animal"){
				classColor = "animals_color"
			}
		
			const card = `
			<div class="card w-25 text-center p-1">
				<i class="fs-2 ${icona.family} ${icona.prefix}${icona.name} ${classColor}"></i>
					<div class="card-body">
						<p class="card-text">${icona.name} </p>
					</div>
			</div>
			`
			container.innerHTML += card; // stampo nel container la variabile card che contiene la card con i div 
		}

	})

}

printIcons() // richiamo funzione

select.addEventListener("change", printIcons) // metto in ascolto il menù a tendina ogni qual volta avviene un cambiamento all'interno di esso 
























// let selezioneFamigliaUser = document.querySelectorAll(".user")
// let selezioneFamigliaAnimali = document.querySelectorAll(".animal")
// let selezioneFamigliaVegetali = document.querySelectorAll(".vegetable")

// console.log(selezioneFamigliaUser)
// console.log(selezioneFamigliaAnimali)
// console.log(selezioneFamigliaVegetali)

// selezioneFamigliaUser.forEach((icona) => {
     
//      icona.classList.add("user_color")
     
// })

// selezioneFamigliaAnimali.forEach((icona) => {
     
//      icona.classList.add("animals_color")
     
// })

// selezioneFamigliaVegetali.forEach((icona) => {
     
//      icona.classList.add("vegetable_color")
     
// })







































