let myDiv = document.getElementById('elem');
let myButton = document.getElementById('myButton');

myButton.addEventListener('click', function() {
  myDiv.style.width = '400px';
  myDiv.style.height = '300px';
});