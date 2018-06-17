$( document ).ready(function() {
    var audio = new Audio('assets/success.mp3');
    var userScore = 0
    var randomNum = 0
    var wins = 0
    var losses = 0 
    var picture1 = 0
    var picture2 = 0
    var picture3 = 0
    var picture4 = 0
    
    var roundStart = function(){

        picture1 = Math.floor((Math.random() * 12) + 1);
        picture2 = Math.floor((Math.random() * 12) + 1);
        picture3 = Math.floor((Math.random() * 12) + 1);
        picture4 = Math.floor((Math.random() * 12) + 1);

        randomNum = Math.floor((Math.random() * 108) + 17);
        $("#randomNum").text(randomNum);

        userScore = 0
        $("#user_score").text(" " + userScore);



        console.log(picture1);
        console.log(picture2);
        console.log(picture3);
        console.log(picture4);
        console.log(randomNum);

    };



    roundStart();



    $("#image1").click(function(){
        userScore = userScore + picture1;
        $("#user_score").text(" " + userScore);
        compare();
    });

    $("#image2").click(function(){
        userScore = userScore + picture2;
        $("#user_score").text(" " + userScore);
        compare();
    });

    $("#image3").click(function(){
        userScore = userScore + picture3;
        $("#user_score").text(" " + userScore);
        compare();
    });

    $("#image4").click(function(){
        userScore = userScore + picture4;
        $("#user_score").text(" " + userScore);
        compare();
    });

    
    var compare = function(){
        if(userScore > randomNum){
            alert("Sorry, you lost.");
            losses = losses + 1
            $("#losses").text(losses);
            roundStart();
            
        }
        if (userScore === randomNum){
            alert("WINNER!");
            wins = wins + 1
            $("#wins").text(wins);
            roundStart();
        }	
    };


});