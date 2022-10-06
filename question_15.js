var guestList = ["Quaid-e-Azam","Imran khan","Junaid jamsheed"];
var notComing = "Quaid-e-Azam"; 

for(var i = 0; i < guestList.length; i++) {
    if(guestList[i] === notComing) {
        console.log(`${guestList[i]} can't make it.`)
        guestList[i] = "Shehzad roy"
    }
    console.log(`We request ${guestList[i]} the honor of your presence in dinner`)
}

