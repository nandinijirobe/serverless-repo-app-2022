// This is the running late function
// It returns late if time is past 10pm
// It returns early if time is before 10pm

function running_late(date){
    someDate = new Date (date);
    // console.log(someDate.getHours());
    if (someDate.getHours() >= 22) {
        return "It is late!";
    } else {
        return "It is still early!";
    }
} 


// someDate = Date('December 17, 1995 23:24:00');
// console.log(running_late('December 17, 1995 23:24:00'));
exports.running_late = running_late;
