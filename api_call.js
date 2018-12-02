var request = new XMLHttpRequest();
var key ="";
request.open('GET', `https://api.arbetsformedlingen.se/af/v0/platsannonser/matchning?nyckelord=${key}=1&antalrader=3`, true);
request.onload = function () {

  // Begin accessing JSON data here


  var data = JSON.parse(this.response);

  console.log(data.matchningslista);
}

request.send();