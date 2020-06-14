/**
 * Day Planner Application
 */

 // Variables
 // Function definitions
    // if colNine < current time, then colNine.style.backgroundColor = "#808080"; && disable button click and save feature.
    // else if colNine === current time, then colNine.style.backgroundColor = "#ff0000"; && allow an event to be created and saved.
    // else if ColNine > current time, then colNine.style.backgroundColor = "#00ff00"; && allow an event to be created and saved.
    //--------------------
        // time blocks color coded to display past, present, and future
    function colorCode(){
        
    }
    //--------------------
    
    //function displayDay is going to show the current month, day, and year in the jumbotron.
    function displayDay() {
        $(".lead").append(moment().format('MMMM Do YYYY'));
        $(".lead").css("margin","60px 0px 0px 0px");
        $(".lead").css("font-size", "25px")
    }
 // Function calls
 displayDay();
 // Event listeners