let button = document.querySelector("#button");
let name = document.querySelector("#name");
let tall = document.querySelector("#height");
let weight = document.querySelector("#mass");
let birth = document.querySelector("#dob");

button.addEventListener("click", getHero);

function getHero(){
	updateWithLoading();
	let randomHero = Math.floor((Math.random()* 88) +1 );

	let apiUrl = "https://swapi.co/api/people/" + randomHero;

	axios.get(apiUrl).then(function(response){
		updateInfo(response.data);
	}).catch(e => {
		updateInfoWithError();
	})
}

function updateInfo(data){
	name.innerHTML = `Name: ${data.name}`;
	height.innerHTML = `Height: ${data.height}`;
	mass.innerHTML = `Weight: ${data.mass}`;
	dob.innerHTML = `Birth Year: ${data.birth_year}`;

}

function updateInfoWithError(){
	name.innerHTML = "This person already taken.";
	height.innerHTML = "";	
	mass.innerHTML = "";
	dob.innerHTML = "";

}

function updateWithLoading(){
	name.innerHTML = '<i class="fa fa-circle-o-notch fa-spin fa-3x fa-fw"></i>';
	height.innerHTML = "";	
	mass.innerHTML = "";
	dob.innerHTML = "";

}



