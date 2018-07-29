function empty(){
var radio = document.querySelectorAll("input[type=radio]");
var notempty = false;
for (var i=0; i<radio.length; i++)
  if (radio[i].checked == true)
    return false;
return true;
}

function mode(arr){
var numMapping = {};
var greatestFreq = 0;
var mode;
arr.forEach(function findMode(number) {
    numMapping[number] = (numMapping[number] || 0) + 1;
    if (greatestFreq < numMapping[number]) {
        greatestFreq = numMapping[number];
        mode = number;
    }
});
return +mode;
}

function value(){
var radio = document.querySelectorAll("input[type=radio]");
for (var i=0; i<radio.length; i++)
  if (radio[i].checked == true)
      return parseInt(radio[i].value);
}

var rates= new Array();

function rate(){
  if(empty()){
    alert("You must select a rate");
    return;
  }


rates.push(value());
rates.sort();

if(rates.length < 5){

var media=0;
for(var i = 0; i < rates.length; i++){
  media += rates[i];
}
  media = media / rates.length;
  document.getElementById('grade').innerHTML = media;
  document.getElementById('array').innerHTML = "Array : "+rates.toString();
  return;
}
var quarter = rates.length * 0.25;

var temp = rates.slice(Math.floor(quarter), (rates.length - Math.floor(quarter)));
var media = 0;

for(var i = 0; i < temp.length; i++){
  media += parseInt(temp[i]);
}

  media = media / temp.length;
  media = 0.75*media+mode(temp)*0.25 / 1;
  document.getElementById('grade').innerHTML = media.toFixed(2);
  document.getElementById('array').innerHTML = "Array : "+temp.toString();
  return;





}
