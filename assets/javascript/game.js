
initilize();
  

var resetGame = function () {
  counter = 0;
  targetNumber = 0;
  numberOptions = 0;
  rerun()
  
 }                                                        


 var targetNumber;
 var win = 0
 var lose = 0



function initilize() {

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


  for (var i = 0; i < numberOptions.length; i++) {

    
    var imageCrystal = $("<img>");

    
    imageCrystal.addClass("crystal-image");

    
    imageCrystal.attr("src", imgArray[i]);

    
    imageCrystal.attr("data-crystalvalue", numberOptions[i]);

    
    $("#crystals").append(imageCrystal);
  }

}

return targetNumber

}
  
  $(".crystal-image").on("click", function() {

    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
  
    counter += crystalValue;

   
    document.getElementById("demo").innerHTML = counter;
 
    

    if (counter === targetNumber) {
      document.getElementById("demo1").innerHTML = "You Win!!";
      
      win = (win + 1);
      
      
      $("#wins").text(win);
      resetGame()
      
    }

    else if (counter >= targetNumber) {
      document.getElementById("demo1").innerHTML = "You lose!!";
      
      lose = (lose + 1)
      $("#losses").text(lose);
      resetGame()
      
      }
  });

  console.log(targetNumber)
  
    

  function rerun() {

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
      
    
      
      for (var i = 0; i < numberOptions.length; i++) {
    
       
        var imageCrystal = $("<img>");
    
        imageCrystal.attr("data-crystalvalue", numberOptions[i]);
    
        
        $("#crystals").append(imageCrystal);
      }
    
    }
    
    return targetNumber
    
    }

  