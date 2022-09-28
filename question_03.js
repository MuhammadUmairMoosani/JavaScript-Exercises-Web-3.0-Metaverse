var username = "Muhammad umair";
console.log(`Lower case: `, username.toLowerCase());
console.log(`Upper case: `, username.toUpperCase());
var splitName = username.split(" ")
for(var i = 0; i < splitName.length;i++) {
    splitName[i] = splitName[i][0].toUpperCase() + splitName[i].slice(1);
}

console.log(`Title case: `, splitName.join(" "));