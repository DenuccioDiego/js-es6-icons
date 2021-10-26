
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


function printIcons(){

	const select = document.getElementById("membership")
	
	const container = document.querySelector(".row");
	
	container.innerHTML = "";

	icone.forEach((icona, index, array) => {
		if(select.value == icona.type || select.value == "all" ){

			if(icona.type=="user"){
				var classColor = "user_color"
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
			container.innerHTML += card;
		}

	})

}

printIcons()

const select = document.getElementById("membership");

select.addEventListener("change", printIcons)
























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







































