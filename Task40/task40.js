"use strict";
function makeAlbum(artist, title, tracks) {
    let album = { artist, title };
    if (tracks) {
        album.tracks = tracks;
    }
    return album;
}
console.log(makeAlbum('Pink Floyd', 'The Dark Side of the Moon'));
console.log(makeAlbum('Led Zeppelin', 'IV'));
console.log(makeAlbum('The Beatles', 'Abbey Road', 17));
