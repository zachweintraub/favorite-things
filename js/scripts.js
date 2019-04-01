var numbers = [1, 2, 3, 4];
var thingsArray = [];
function addThing(thing) {
  thingsArray.push(thing);
  return thingsArray;
}

$(function(){

  $('#favThings').submit(function(event){
      event.preventDefault();
      numbers.forEach(function(number){
        addThing($('input#favThing' + number).val());
      });
      // addThing($('input#favThing1').val());
      // addThing($('input#favThing2').val());
      // addThing($('input#favThing3').val());
      // addThing($('input#favThing4').val());
      // var newArray = [];
      // newArray.push(thingsArray[1], thingsArray[0], thingsArray[2]);
      $('#favThings').hide();
      $('#output').append("<ol></ol>");
      thingsArray.forEach(function(thing) {
        $('#output ol').append("<li>" + thing + "</li>");
      });
      // $('#output ol').append("<li>" + newArray[0] + "</li>");
      // $('#output ol').append("<li>" + newArray[1] + "</li>");
      // $('#output ol').append("<li>" + newArray[2] + "</li>");
  });

});
