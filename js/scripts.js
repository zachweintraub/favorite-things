var thingsArray = [];
function addThing(thing) {
  thingsArray.push(thing);
  return thingsArray;
}

$(function(){

  $('#favThings').submit(function(event){
      event.preventDefault();
      addThing($('input#favThing1').val());
      addThing($('input#favThing2').val());
      addThing($('input#favThing3').val());
      addThing($('input#favThing4').val());
      var newArray = [];
      newArray.push(thingsArray[1], thingsArray[0], thingsArray[2]);
      //console.log(newArray);
      $('#favThings').hide();
      $('#output').append("<ol></ol>");
      $('#output ol').append("<li>" + newArray[0] + "</li>");
      $('#output ol').append("<li>" + newArray[1] + "</li>");
      $('#output ol').append("<li>" + newArray[2] + "</li>");
  });

});
