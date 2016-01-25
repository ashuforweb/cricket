// TODO: Need to add overs timline
var finalScore = new Array();
var finalWicket = 0;
Array.prototype.sum = function() {
  var sum = 0;
  for (var i = 0; i < this.length; i++) {
    sum += this[i];
  }
  return sum;
};

function fnWicket() {

  if (confirm("Are you sure about this Wicket")) {
    finalWicket += 1;
    //console.log(finalWicket);
    document.getElementById('final').innerHTML = finalScore.sum() + "/" + finalWicket;
    document.getElementById('notification').innerHTML = "And this is the Wicket!!!";
    document.getElementById('notification').style.visibility = "visible";

    setTimeout(function() {
      document.getElementById('notification').style.visibility = "hidden";
    }, 2500);
  }

}


function fnAddFinal(a) {
  finalScore.push(a);
  document.getElementById('final').innerHTML = finalScore.sum() + "/" + finalWicket;
}

function fnRemoveLast() {
  if (finalScore.length > 0) {
    document.getElementById('notification').innerHTML = finalScore[finalScore.length - 1] + " Runs Removed!!!";
    finalScore.pop();
    document.getElementById('final').innerHTML = finalScore.sum() + "/" + finalWicket;
  } else {
    document.getElementById('notification').innerHTML = " Nothing to be Removed!!!";
  }
  document.getElementById('notification').style.visibility = "visible";
// TODO: Need to move this functionality of hiding notification using CSS rather than JavaScript
  setTimeout(function() {
    document.getElementById('notification').style.visibility = "hidden";
  }, 2500);

}
