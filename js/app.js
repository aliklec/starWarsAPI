findLove.addEventListener("click", showLove);
function showLove(){
 
 let randomLove = Math.floor((Math.random()*88)+1);
 let apiUrl = "https://swapi.co/api/people/" + randomLove;

 axios.get(apiUrl).then(function(response){
  updateInfo(response.data);
 }).catch(e => {
  updateInfoWithError();
 });

function updateInfo(data){
  fullName.innerHTML = data.name;
  height.innerHTML = "<b>Height</b>: " + data.height;
  weight.innerHTML = "<b>Weight</b>: " + data.mass;
  gender.innerHTML = "<b>Gender</b>: " + data.gender;
  hair.innerHTML = "<b>Hair Color</b>: " + data.hair_color;
  eye.innerHTML = "<b>Eye Color</b>: " + data.eye_color;
  birth.innerHTML = "<b>Birth Year</b>: " + data.birth_year;
}

function updateInforWithError(){
  fullName.innerHTML = "Your ship has sailed";
  height.innerHTML = "";
  weight.innerHTML = "";
  gender.innerHTML = "";
  hair.innerHTML = "";
  eye.innerHTML = "";
  birth.innerHTML = "";
}

function updateWithLoading(){
  fullName.innerHTML = '<i class="fa fa-circle-o-notch fa-spin fa-3x fa-fw"></i>';
  height.innerHTML = "";
  weight.innerHTML = "";
  gender.innerHTML = "";
  hair.innerHTML = "";
  eye.innerHTML = "";
  birth.innerHTML = "";
 }
}


