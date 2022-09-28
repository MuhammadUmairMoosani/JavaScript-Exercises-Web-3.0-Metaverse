function make_album(artistName,albumTitle,tracks) {
    this.artistName = artistName;
    this.albumTitle = albumTitle;
    if(tracks) {
       this.tracks = tracks; 
    }
}

console.log(new make_album("Shehzad Roy","Teri Soorat"))
console.log(new make_album("Ali Zafar","Masty"))
console.log(new make_album("Atif Aslam","Jal Pari",20))