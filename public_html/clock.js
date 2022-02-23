
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
 
}

update();
