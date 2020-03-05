function sendIn() {
  var valueMsg = document.getElementById('inp').value;
  var container = document.getElementById('crush');
  var cont1 = document.createElement('div');
      cont1.setAttribute('id','crush1');
  var box1 = document.createElement('span');
  box1.setAttribute('class','box1');
  var sauLigne = document.createElement('br');
  box1.innerHTML = valueMsg;

  cont1.appendChild(box1);
  container.appendChild(cont1);



}
function sendOut() {
  var valueMsg = document.getElementById('inp').value;
  var container = document.getElementById('crush');
  var cont2 = document.createElement('div');
      cont2.setAttribute('id','crush2');
  var box2 = document.createElement('span');
  box2.setAttribute('class','box2');
  var sauLigne = document.createElement('br');
  box2.innerHTML = valueMsg;
  cont2.appendChild(box2);
  container.appendChild(cont2);





}
