var usernames = [];

if(usernames.length) {
    for(var i = 0; i < usernames.length; i++) {
        if(names[i] === "admin") {
            console.log("Hello admin, would you like to see a status report?");
        } else {
            console.log("Hello Eric, thank you for logging in again.");
        }
    }
} else {
    console.log("We need to find some users!");
}