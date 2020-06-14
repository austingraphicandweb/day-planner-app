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
        //if event is before moment().calendar(); then change the style of the div to grey.
        //if moment().calendar(); then change the div style to red.
        //if the time is after moment().calendar(); then turn those calendar slots to green.
    }
    //--------------------
    
    //function displayDay is going to show the current month, day, and year in the jumbotron.
    function displayDay() {
        $(".lead").append(moment().format('MMMM Do YYYY'));
        $(".lead").css("margin","60px 0px 0px 0px");
        $(".lead").css("font-size", "25px")
    }

    function time() {
        $(".style").css("margin","30px");
        $(".block-1").append(moment().subtract(3, 'hour').format('LT'));
        $(".block-2").append(moment().subtract(2, 'hour').format('LT'));
        $(".block-3").append(moment().subtract(1, 'hour').format('LT'));
        $(".block-4").append(moment().format('LT'));
        $(".block-5").append(moment().add(1, 'hour').format('LT'));
        $(".block-6").append(moment().add(2, 'hour').format('LT'));
        $(".block-7").append(moment().add(3, 'hour').format('LT'));
        $(".block-8").append(moment().add(4, 'hour').format('LT'));
        // block one === moment().subtract(3, 'hour').format('LT')
        // block two === moment().subtract(2, 'hour').format('LT')
        // block three === moment().subtract(1, 'hour').format('LT')
        // block four === moment().format('LT')
        // block five === moment().add(1, 'hour').format('LT')
        // block six === moment().add(2, 'hour').format('LT')
        // block seven === moment().add(3, 'hour').format('LT')
        // block eight === moment().add(4, 'hour').format('LT')
    }
 // Function calls
 displayDay();
 time();
 // Event listeners
