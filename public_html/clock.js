
function update() {

    let now = new Date();
    let current_date = now.getDate() + "/" + (now.getMonth() + 1) + "/" + now.getFullYear();
// shows current date

    document.getElementById("date").innerHTML = current_date;
//let time= new time();
    let time = now.getHours() + ":" + now.getMinutes()
            + ":" + now.getSeconds();
// shows current time
    document.getElementById("time").innerHTML = time;
// shows which day is
    let day = now.getDay();
    switch (day) {
        case 0:
            day = "Sunday";
            break;
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
            break;
    }
    document.getElementById("day").innerHTML = day;
// 12 hours format
    let hours = now.getHours();
    if (hours > 12) {
        hours = hours % 12;
        time = hours + ":" + now.getMinutes()
                + ":" + now.getSeconds() + " PM";
        document.getElementById("time_twelve").innerHTML = time;
    } else {
        time = hours + ":" + now.getMinutes()
                + ":" + now.getSeconds() + " AM";
        document.getElementById("time_twelve").innerHTML = time;
    }
 console.log(hours)
// for the Greetings
    let greet = "";
    let wish = "";
    if (6 <= hours && hours < 10) {
        greet = "Good Morning";
        wish = " Have a Good Day!";
    } else if (10 <= hours && hours < 1) {
        greet = "Hello";
        wish = " Have a Good Day!";

    } else if (1 <= hours && hours < 4) {
        greet = "Good Afternoon";
        wish = " Have a Good Day!";

    } else if (4 <= hours && hours < 10) {
        greet = "Good Evening";
        wish = " Have a nice evening!";

    } else if (10 <= hours && hours < 6) {
        greet = "Good Night";
        wish = " Have a good sleep!";

    }
    document.getElementById("greeting").innerHTML = greet + "<br>" + wish;





}


    update();
