/**
 * Day Planner Application
 */

$(document).ready(function(){

 // Global Variables

 // Function definition

    //--------------------
        // time blocks color coded to display past, present, and future
    function colorCode(){
        //if time block is .block-past then display grey.
        //if time block is .block-present then display red.
        //if time block is .block-future then display green.
        var blockPast = $(".block-past");
        var blockPresent = $(".block-present");
        var blockFuture = $(".block-future");
        if (blockPast) {
            $(blockPast).css("background-color","#ece8e2");
        } 
        if (blockPresent) {
            $(blockPresent).css("background-color", "#e32928");
        }
        if (blockFuture) {
            $(blockFuture).css("background-color", "#9df200");
        }
    }
    
    //--------------------
    // Header display 
    //function displayDay is going to show the current month, day, and year in the jumbotron.
    function displayDay() {
        $(".lead").append(moment().format('MMMM Do YYYY'));
        $(".lead").css("margin","60px 0px 0px 0px");
        $(".lead").css("font-size", "25px")
    }
    //-------------------

    // Time display on the left hand side of the page. This indicates which block will save information for what hour within a standard work day.
    function time() {
        $(".style").css("margin","10px");
        $(".block-1").append(textContent = "9 a.m.");
        $(".block-2").append(textContent = "10 a.m.");
        $(".block-3").append(textContent = "11 a.m.");
        // fix this
        $(".block-4").append(textContent = "12 p.m.");
        $(".block-5").append(textContent = "1 p.m.");
        $(".block-6").append(textContent = "2 p.m.");
        $(".block-7").append(textContent = "3 p.m.");
        $(".block-8").append(textContent = "4 p.m.");
        $(".block-9").append(textContent = "5 p.m.");
    }
    //------------------

 // Function calls
 displayDay();
 time();
 colorCode();
 // Event listeners

    // -----------------------------------------
    // Save button 
    // I have given each input a unique class so that when looking at the saved content within localStorage you can see the most recent save for each hour throughout the standard work day.
$(".container").on("click", ".btn", function (event){
    event.preventDefault(); 
    var content = $(".content-0").val();
    var array = JSON.stringify(content);
    localStorage.setItem("content-0",array);
    var content = $(".content-1").val();
    var array = JSON.stringify(content);
    localStorage.setItem("content-1",array);
    var content = $(".content-2").val();
    var array = JSON.stringify(content);
    localStorage.setItem("content-2",array);
    var content = $(".content-3").val();
    var array = JSON.stringify(content);
    localStorage.setItem("content-3",array);
    var content = $(".content-4").val();
    var array = JSON.stringify(content);
    localStorage.setItem("content-4",array);
    var content = $(".content-5").val();
    var array = JSON.stringify(content);
    localStorage.setItem("content-5",array);
    var content = $(".content-6").val();
    var array = JSON.stringify(content);
    localStorage.setItem("content-6",array);
    var content = $(".content-7").val();
    var array = JSON.stringify(content);
    localStorage.setItem("content-7",array);
    var content = $(".content-8").val();
    var array = JSON.stringify(content);
    localStorage.setItem("content-8",array);
})
// -----------------------------------------

}) // this is the end of the very first part of my script which is $(document).ready(function{}) which is what determines if my code is ready to run or not.