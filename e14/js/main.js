$(document).ready(function() {
    // run function on initial page load
    // functionName();
});
function functionName() {
  
}
function nav() {
  $('.class').click(function(){
    $('#id').removeClass('class');
    $('html').addClass('class');
  });
}

function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

function randomList(){
  var students = ["Ada", "Ayman", "Camille", "Claudia", "Eren", "Esther", "Nikko", "Jared", "Jessie", "Julianne", "Kerbey", "Logan", "Nancy", "Nomin", "Ryan", "Travis", "Tre'lise", "Venice", "Yinyu", "Zubair"];
  var y;
  $('#generate').click( function(){
    $('ol').empty()
    shuffle(students);
    for (y = 0; y < students.length; y++) {
      var html = '<li>' + (y + 1) + '. ' + students[y] + '</li>';
      $('#list').append(html);
    };
  });
}
