
//var imgArray = {
//  crystals0 : "assets/images/00261fda-4062-4096-81fd-8cf96b9034e8.jpg",
//  crystals1 : "assets/images/photo-1544274101-42412eeff2c5.jpg",
//  crystals2 : "assets/images/photo-1533737338828-ebebc30718b3.jpg",
//  crystals3 : "assets/images/photo-1544274102-2fe4d95912f7.jpg",
//}

var counter = 0;
var win = 0;
var lose = 0;
$("#wins").text(win);
$("#losses").text(lose);

//$(document).ready(function() {
  initFunction();


// Function to call when document loads or when player wins/losses
function initFunction(){
  targetNumber = getRandomNumber(19,120);
  num0 = getRandomNumber(1,12);
  num1 = getRandomNumber(1,12);
  num2 = getRandomNumber(1,12);
  num3 = getRandomNumber(1,12);

  
}
// Given a min and max value, return a whole number in that range.
// Assumes minValue and maxValue cannot be the same number.
function getRandomNumber(minValue, maxValue) {
  return (Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue);
}


$("#number-to-guess").text(targetNumber);
$("#crystals0").attr("data-crystalvalue", num0);
$("#crystals1").attr("data-crystalvalue", num1);
$("#crystals2").attr("data-crystalvalue", num2);
$("#crystals3").attr("data-crystalvalue", num3);



console.log(num0)
  


  

  
  
  
  

  

  //document.write(imgArray.crystal0);


  // Now for the hard part. Creating multiple crystals each with their own unique number value.

  // We begin by expanding our array to include four options.
  

  // Next we create a for loop to create crystals for every numberOption.
 //for (var i = 0; i < 4; i++) {

    // For each iteration, we will create an imageCrystal
  //var imageCrystal = $("<img>");

    // First each crystal will be given the class ".crystal-image".
    // This will allow the CSS to take effect.
   //imageCrystal.addClass("crystal-image");

    // Each imageCrystal will be given a src link to the crystal image
  // imageCrystal.attr("src", imgArray.crystals0);

    // Each imageCrystal will be given a data attribute called data-crystalValue.
    // This data attribute will be set equal to the array value.
   //imageCrystal.attr(imgArray.crystals0.imgValue);

    // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
  //$("#crystals0").append(imageCrystal);
  //}

//})
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
      
      win++;
      //var k = (k + 1)
      
     // $("#wins").text(win);
      //initFunction();

      
      //var ques = confirm ("Do you want to play Crystals Guess Game again?");
    }

    else if (counter >= targetNumber) {
      document.getElementById("demo1").innerHTML = "You lose!!";
      
      lose++;
     // $("#losses").text(lose);
     //initFunction();
      //var k = (k + 1);
      
      //var ques = confirm ("Do you want to play Crystals Guess Game again?");
    }
  });
