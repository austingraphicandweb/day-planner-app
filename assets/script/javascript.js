/**
 * Day Planner Application
 */
$(document).ready(function(){

 // Global Variables

 // Function definition

    //--------------------
        // time blocks color coded to display past, present, and future
    function colorCode(){
        //if event is before .append(moment().format('LT')); then change the style of the div to grey.
        //if .append(moment().format('LT')); then change the div style to red.
        //if the time is after .append(moment().format('LT')); then turn those calendar slots to green.
        var blockPast = $(".block-past");
        var blockPresent = $(".block-present");
        var blockFuture = $(".block-future");
        if (blockPast) {
            $(blockPast).css("background-color","#ece8e2");
        } 
        if (blockPresent) {
            $(blockPresent).css("background-color", "#e68d6d");
        }
        if (blockFuture) {
            $(blockFuture).css("background-color", "#69bd45");
        }
    }
    
    //--------------------

    // Header display of the current date

    //function displayDay is going to show the current month, day, and year in the jumbotron.
    function displayDay() {
        $(".lead").append(moment().format('MMMM Do YYYY'));
        $(".lead").css("margin","60px 0px 0px 0px");
        $(".lead").css("font-size", "25px")
    }

    //-------------------

    // Time display on the left hand side of the page
    function time() {
        $(".style").css("margin","10px");
        $(".block-1").append(moment().subtract(3, 'hour').format('h a'));
        $(".block-2").append(moment().subtract(2, 'hour').format('h a'));
        $(".block-3").append(moment().subtract(1, 'hour').format('h a'));
        // fix this
        $(".block-4").append(moment().format('h a'));
        $(".block-5").append(moment().add(1, 'hour').format('h a'));
        $(".block-6").append(moment().add(2, 'hour').format('h a'));
        $(".block-7").append(moment().add(3, 'hour').format('h a'));
        $(".block-8").append(moment().add(4, 'hour').format('h a'));
    }

    //------------------

 // Function calls
 displayDay();
 time();
 colorCode();
 // Event listeners

    // -----------------------------------------
    // Save button 
    // this button is treated like a submit button where when it is clicked, an event is triggered. Once save button is clicked it needs to grab the value of the input and the id of the input.
$(".container").on("click", ".btn", function (event){
    event.preventDefault(); 
    var content = $(this).val();
    var array = JSON.stringify(content);
    localStorage.setItem("content",array);
    var deString = JSON.parse(localStorage.getItem("content"));
    console.log(deString);
})
// -----------------------------------------

})