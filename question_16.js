var guestList = ["Quaid-e-Azam","Imran khan","Junaid jamsheed"];
console.log(`Quaid-e-Azam can't make it.`)

guestList.unshift("Zafar");
guestList.splice(3,0,"Khalid");
guestList.push("Salman");

for(var i = 0; i < guestList.length; i++) {
    if(guestList[i] === "Quaid-e-Azam") {
        guestList[i] = "Shehzad roy"
    }
    console.log(`We request ${guestList[i]} the honor of your presence in dinner`)
}
