var magicians = ["Noor Jehan","Mehdi Hassan","Ahmed Rushdi","Nazia Hassan"];
var greatMagicians = [];

function make_great(arr) {
        for(var i = 0; i < arr.length; i++) {
        greatMagicians.push(`Great ${arr[i]}`) ;
    }
}


function show_magicians(arr) {
    for(var i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
make_great(magicians)

show_magicians(greatMagicians);
show_magicians(magicians);

