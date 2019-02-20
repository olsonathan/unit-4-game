//$(document).ready(function() {
initilize();
  

var resetGame = function () {
  counter = 0;
  //Reset numbers assigned to crystals
  numberOptions = [];
  //Reset the target number
  targetNumber = 0;
  initilize()
  
 }                                                        


 var targetNumber;
 var win = 0
 var lose = 0



function initilize() {

//for (var k = 0; {
//console.log(win)
//console.log(lose)
//console.log(k)
//var ques = confirm ("Do you want to play Crystals Guess Game");
var k = 0

if (k >= 0) {




  var Tmax = 120;
  var Tmin = 19;
  

  var x = (Math.random()*((Tmax-Tmin)))+Tmin;
  var r = (Math.round)(x)
  targetNumber = r
  console.log(r)


  $("#number-to-guess").text(targetNumber);

 
  var numberOptions = [];
  var k = 0

  while (k < 4){
    var Omax = 12;
    var Omin = 1;
  

  var q = (Math.random()*((Omax-Omin)))+Omin;
  var a = (Math.round)(q)
  numberOptions.push(a)
  console.log(a)
  console.log(numberOptions)
  var k = (k + 1)
    }
  counter = 0;
 
  $("#wins").text(win);
  $("#losses").text(lose);
  

  var imgArray = ["assets/images/00261fda-4062-4096-81fd-8cf96b9034e8.jpg", 
  "assets/images/photo-1544274101-42412eeff2c5.jpg",
  "assets/images/photo-1533737338828-ebebc30718b3.jpg",
  "assets/images/photo-1544274102-2fe4d95912f7.jpg",
  ]

  // Now for the hard part. Creating multiple crystals each with their own unique number value.

  // We begin by expanding our array to include four options.
  

  // Next we create a for loop to create crystals for every numberOption.
  for (var i = 0; i < numberOptions.length; i++) {

    // For each iteration, we will create an imageCrystal
    var imageCrystal = $("<img>");

    // First each crystal will be given the class ".crystal-image".
    // This will allow the CSS to take effect.
    imageCrystal.addClass("crystal-image");

    // Each imageCrystal will be given a src link to the crystal image
    imageCrystal.attr("src", imgArray[i]);

    // Each imageCrystal will be given a data attribute called data-crystalValue.
    // This data attribute will be set equal to the array value.
    imageCrystal.attr("data-crystalvalue", numberOptions[i]);

    // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
    $("#crystals").append(imageCrystal);
  }

}

return targetNumber

}
  // This time, our click event applies to every single crystal on the page. Not just one.
  $(".crystal-image").on("click", function() {

    // Determining the crystal's value requires us to extract the value from the data attribute.
    // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
    // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
    // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter
    

    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    // We then add the crystalValue to the user's "counter" which is a global variable.
    // Every click, from every crystal adds to the global counter.
    counter += crystalValue;

    // All of the same game win-lose logic applies. So the rest remains unchanged.
    document.getElementById("demo").innerHTML = counter;
 
    

    if (counter === targetNumber) {
      document.getElementById("demo1").innerHTML = "You Win!!";
      
      win = (win + 1);
      //var k = (k + 1)
      
      $("#wins").text(win);
      resetGame()
      //location.reload()

      
      //var ques = confirm ("Do you want to play Crystals Guess Game again?");
    }

    else if (counter >= targetNumber) {
      document.getElementById("demo1").innerHTML = "You lose!!";
      
      lose = (lose + 1)
      $("#losses").text(lose);
      resetGame()
      
      //location.reload()
      //var k = (k + 1);
      
      //var ques = confirm ("Do you want to play Crystals Guess Game again?");
    }
  });

  console.log(targetNumber)
  
    
  //}
//else {  
  //    alert("You are no fun...you should play");

//}
//};