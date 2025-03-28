
let profileName =document.getElementById("name-out");
let name =JSON.parse(localStorage.getItem("name")); 
profileName.innerHTML=name;
