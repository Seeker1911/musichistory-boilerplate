/*Each student must add one song to the beginning and the end of the array.
Loop over the array and remove any words or characters that obviously don't belong.
Students must find and replace the > character in each item with a - character.
Must add each string to the DOM in index.html in the main content area.
{Song name} by {Artist} on the album {Album}*/

var songs = [];

songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";

//add on song to beginning of the array.
songs.unshift("Tennessee Whiskey > by Chris Stapleton on the album Traveller");
console.log("begging of array: ", songs);
//add on song to end of the array.
songs.push("Southern Comfort Zone > by Brad Paisley on the album Wheelhouse");
console.log("end of array: ", songs);

var songList = document.getElementById("songs");
//loop over array and remove unnecessary characters.
for (var i = 0; i < songs.length; i++) {
    songs[i];
    songs[i] = songs[i].replace(/>/g, '-');
    songs[i] = songs[i].replace(/\*|\(|!|@/g, "");
    /** Add each string to the DOM in index.html in the main content area. ***/
	songList.innerHTML += '<li>' + songs[i] + '</li>'; 
};
console.log("songs fix: ", songs);


