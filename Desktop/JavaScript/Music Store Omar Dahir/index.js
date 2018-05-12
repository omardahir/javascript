console.log('is this connected');
(function(){
  var config = {
    apiKey: "AIzaSyBdHshdJ8M6no4TcXsezI0K9b1QSqG-7r4",
    authDomain: "music-store-project.firebaseapp.com",
    databaseURL: "https://music-store-project.firebaseio.com",
    projectId: "music-store-project",
    storageBucket: "music-store-project.appspot.com",
    messagingSenderId: "1081383114275"
  };
  console.log(config);
  firebase.initializeApp(config);

  const myPage= document.getElementById('artist');
  const myAlbum= document.getElementById('album');
  const myYear= document.getElementById('year');
  const dbRefObject= firebase.database().ref().child('Artist');

  let artist;
  let album;
  let year;

  dbRefObject.on('value', snap=>{
    console.log(snap.val());
    let content= snap.val();
    let test=Object.keys(content).map(key=>content[key])
    year=test.map(key=>`<li> ${key.Year}</li>`).join('')
    artist=test.map(key=>`<li> ${key.Name}</li>`).join('')
    album=test.map(key=>`<li> ${key.Album}</li>`).join('')
   console.log(album, artist, year);

var data;
var names;
var people = document.getElementById('people');
var filteredPeople = document.getElementById('filter')

filteredPeople.addEventListener('input', change);

function change(e){
  console.log(filteredPeople.value);
  let newNames= name.filter(name=>{
    return name.toLowerCase().slice(0, filteredPeople.value.length) == filteredPeople.value.toLowerCase();
  })
  console.log(newNames);
  newNames.forEach(function(name){
    let item = document.createElement('li');
    item.textContent = name;
    people.innerHTML = newNames;
    })
}




//   myPage.innerHTML=artist;
//   myAlbum.innerHTML=album;
//   myYear.innerHTML=year;
 })
}())
