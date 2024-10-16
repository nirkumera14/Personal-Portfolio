console.log("Welcome to MyFevSong");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Simroon Tera Name - Manan Bhardawaj", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Sunny Suuny 2 - Yo Yo  Honey Singh,Neha Kakkar", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "Chadni- Sachet and Parampara Tondon", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Heeriye - Arjit Singh", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "What Jhumka-Tonight-feat-Arjit Singh", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Zihaal E Miskin - Vishal Mishra", filePath: "songs/2.mp3", coverPath: "covers/6.jpg"},
    {songName: "Adhoore Hum - Gajendra", filePath: "songs/2.mp3", coverPath: "covers/7.jpg"},
    {songName: "Naiyo Lagda- Kamaal Khan", filePath: "songs/2.mp3", coverPath: "covers/8.jpg"},
    {songName: "Mast Aankein- Jubin", filePath: "songs/2.mp3", coverPath: "covers/9.jpg"},
    {songName: "Jalsa - Raniganj", filePath: "songs/4.mp3", coverPath: "covers/10.jpg"},
    {songName: "Didaar- Kaka", filePath: "songs/4.mp3", coverPath: "covers/11.jpg"},
]

songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})
 

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=10){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})