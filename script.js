var dates = (document.getElementsByClassName('last-message'));
var personnes = (document.getElementsByClassName('header'));
var list="";
for (var i=0 ; i<dates.length; i++) {
list = list + "\n[" +

////////////////////////////  DATES  ///////////////////////////
(dates[i].getElementsByClassName('timestamp'))[0].innerText

//////////////////////////// NAMES OF PERSONS //////////////////
+ "] " + (personnes[i].getElementsByClassName('name'))[0].innerText

////////////////////// LAST MESSAGES : uncomment next line if you want to show messages /////////
//+ " = (dates[i].getElementsByClassName('summary'))[0].innerText

};
console.log(list);
alert(list);
