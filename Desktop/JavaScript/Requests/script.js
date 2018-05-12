var data;
var names;
var people = document.getElementById('people');
var filteredPeople = document.getElementById('filter')

filteredPeople.addEventListener('input', change);

function change(e){
  console.log(filteredPeople.value);
  let newNames=names.filter(name=>{
    return name.toLowerCase().slice(0, filteredPeople.value.length) == filteredPeople.value.toLowerCase();
  })
  console.log(newNames);
  newNames.forEach(function(name){
    let item = document.createElement('li');
    item.textContent = name;
    people.innerHTML = newNames;
    })
}




fetch("https://swapi.co/api/people")
.then(function(response){
  return response.json();
}).then(function(response){
  data = response.results;
  names = data.map(function(person){
    return person.name;
  })
//   names.forEach(function(name) {
//     let item = document.createElement("p");
//     item.textContent = name;
//     people.appendChild(item)
//   })
})



// function filterNames(event) {
//  var filteredNames = names.filter(function(name){
//    return name.slice(O, userInput.length) === userInput
//  })
// }
