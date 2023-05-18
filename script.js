

let pop_song_left = document.getElementById('pop-song-left');
let pop_song_right = document.getElementById('pop-song-right');
let pop_song = document.getElementsByClassName('pop-song')[0];


pop_song_right.addEventListener('click', ()=>{
    pop_song.scrollLeft +=330;
})


