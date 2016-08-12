$( document ).ready(function() {
    console.log( "ready!" );
    var topics =["Elephant", "Zebra", "Rhinoceros", "Monkey", "Tiger", "Lion"];
    console.log(topics);
    arrbtn();
     $(document.body).on('click', '.clickable', function(){
    // if $("input"), then as soon as they click, creates blank button, however the if/else statement is not helping and nothing console.logs. .submit() not successful
    $('#submit').on('click', function(){
        var animalNew= $('#newAnimal').val();
        // if(animalNew!=" "){
        console.log(animalNew);
        newB = $('<button>').addClass('first').text(animalNew);
        //newB.attr(data-animal, animalNew); 
        newB.attr(animalNew);
        $('#buttonSpace').append(newB);
        fetchAnimals();

        return false;

    });
    // else{
    //     alert ("Please type your choice of animal, blank spaces cannot be heard.")
    //     return false;
    // }
    // });
    // //  - NOT working Submit Button - new input 2 checks, 1 if >15 then create & push new button val to array and remove 0-array.length-1
    // $("input").click(function(){
    //     var newB= $("#newAnimal").val();
    //     console.log (newB);
    //     if(topics.length < 5){
    // alert("Whoa! Time to start a new safari! Click on 'New Safari' to start again!");

    // topics = [];
    // $("<button>").addClass('first').text("New Safari");
    
    
    //     topics.push(newB);
    //     arrbtn();
        // topics.remove (0, array.length - 1);  add }  and });
    
    // lines 52 - 60 arrbtn function working
    function arrbtn(){
        for (var i = 0; i < topics.length; i++) {
            var button = $("<button>"); 
            button.attr("data-animal", topics[i]);  // button.attr("name",topics[i]);
            button.text(topics[i]); // name of animal on button
            button.addClass("clickable");
            $("#buttonSpace").append(button);
            console.log (topics [i]);
            }               
    }   
    //  lines 63 - 97 working button click routine
    
    function fetchAnimals(animalName) {

    }

    $('button').on("click", function() {
        var animal = $(this).data("animal");
        fetchAnimals(animal);
         // pull name of animal from button clicked
        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=dc6zaTOxFJmzC&limit=10"; // do search using variable 'animal'

        $.ajax({url: queryURL, method: 'GET'})

        .done(function(response) {
            console.log(response);
            console.log(queryURL);

        var results = response.data;

        for (var i = 0; i < results.length; i++) {  
        
            var animalDiv = $('<div class=gifSpace>'); //create a space
            var p = $('<p>').text("Rating: " + results[i].rating);//create a p w/rating 
            console.log(results[i].rating);
            var animalImage = $('<img>'); //create a img space for gif
        
            animalImage.attr('src', results[i].images.fixed_height_still.url); //gif url to var
            animalImage.attr('data-animate', results[i].images.fixed_height.url); //gif url to var
            animalImage.attr('data-still', results[i].images.fixed_height_still.url); //gif url to var
            animalImage.attr('data-state', 'still'); 
            animalImage.addClass("clickable");
            
            console.log(animalImage);
            animalDiv.append(p); //add p rating text 
            animalDiv.append(animalImage);// add gif
            $("animalDiv").addClass("animalDisplay");
            $('#gifsHere').prepend(animalDiv); // add animaldiv in front/at the beginning                      

            }; //end of for loop
        }); //end of done function
   });//end of button click
}); //end of clickable


    // Make new button (from input line 19 - id newAnimal) Problem 75-87
        // $("input").click(function(){
        //     //event.preventDefault(); // don't want click submit to refresh page, 
        //     var animal = $("#newAnimal").val();
        // if (animal!== "" /*&&  $.inArray('animal', topics) == -1 */){
        //     var newB = $("<button>");
        //     newB.text(animal);
        //     $("#buttonSpace").append(newB);
        //     console.log (animal);
        //     topics.push("animal"); 
        //     event.preventDefault();
        //     arrbtn();
        //     } // don't want click submit to refresh page, 
        // else{
        //     alert("Mind your P's and Q's, we await your proper response");
        // }
        // });
       

        // //following is flip still/animate function  Problem 89-101
        $(".gifClass").on('click', function(event){
            var animate = response.data.images.fixed_height.url;
            var still =   response.data.images.fixed_height_still.url;
            var state = $(this).attr('data-state');
            console.log(state);
        if(state === 'still'){
            $(this).attr('src',$(this).data('animate'));
            $(this).attr('data-state','animate');
        }
        else{
            $(this).attr('src', $(this).data('still'));
            $(this).attr('data-state','still');
        }
          }); //end of animalDiv click function

    //}); //end of function event
    //var animate = results.images.fixed_height.url
    //var still =   results.images.fixed_height_still.url

}); //end of doc ready  


// //     
// Example of slicing--- practice -
//Difference betwn the giphy/animated url ends in .gif while the still url ends in_s.gif
//                    var str = animalImage; // can't pull animalImage outside button function 59
//                    var first = str.slice(0, str.length -4);
//                    var second = str.slice (-4);
//                    var still = (first + "_s" + second);
//                    console.log(still);
        
//                 $('animalDiv').on('click', function(e) {
            
//                     var animate = $(this).attr('data-animate');

//                 if(state === 'still') {      // assuming  'state is in the url like activity'
//                     $(this).attr('src', animate); 
//                     $(this).attr('data-state', 'animate');

//                 } else {

//                     $(this).attr('src', still);
//                     $(this).attr('data-state', 'still');

//                 }
         //Storage closet: may use later
//               //   two variables 
            // var still = results.images.fixed_height_still.url;
            // var animate = results.images.fixed_height.url;
            //newB.attr('src', response.data.images.fixed_height_still.url);
            //newB.attr('data-state', 'still');
