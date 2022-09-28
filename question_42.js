var magicians = ["Noor Jehan","Mehdi Hassan","Ahmed Rushdi","Nazia Hassan"];

function make_great(arr) {
        for(var i = 0; i < arr.length; i++) {
        magicians[i] = `Great ${arr[i]}`;
    }
    return magicians;
}


function show_magicians(arr) {
    for(var i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

show_magicians(make_great(magicians));

