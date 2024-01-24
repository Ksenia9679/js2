let myButton = document.getElementById('myButton');
let elem = document.getElementById('elem');

myButton.addEventListener('click', function() {
  let width = parseInt(getComputedStyle(elem).width, 10);
  let height = parseInt(getComputedStyle(elem).height, 10);
  alert('Width: ' + width + ', Height: ' + height);
});