var names = ["Asim","Khalid","admin","Rahim","Salman"];

for(var i = 0; i < names.length; i++) {
    if(names[i] === "admin") {
        console.log("Hello admin, would you like to see a status report?");
    } else {
        console.log("Hello Eric, thank you for logging in again.");
    }
}