let day;
switch(new Date().getDay()){
    case 0:
        day = "sunday";
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

function my_function(x, y){
    return(x * y);
}
let result = my_function(50, 10);
document.getElementById('demo').innerHTML = result;