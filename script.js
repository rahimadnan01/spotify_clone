console.log("welcome to spotify")

// initializing the variables
let songIndex = 0;
let audioElement = new Audio('./songs/1.mp3')
let masterPlay = document.getElementById('masterPlay')
let myProgressBar = document.getElementById('myprogressbar')
let gift = document.getElementById('gift')
let mastersongname = document.getElementById('mastersongname')
let songItems = Array.from(document.getElementsByClassName('songItem'))

let songs = [
    {songName:"Salam-e-Ishq1", filepath: './songs/1.mp3', cover:'covers/1.jpg'},
    {songName:"Salam-e-Ishq2", filepath: './songs/2.mp3', cover:'covers/2.jpg'},
    {songName:"Salam-e-Ishq3", filepath: './songs/3.mp3', cover:'covers/3.jpg'},
    {songName:"Salam-e-Ishq4", filepath: './songs/4.mp3', cover:'covers/4.jpg'},
    {songName:"Salam-e-Ishq5", filepath: './songs/5.mp3', cover:'covers/5.jpg'},
    {songName:"Salam-e-Ishq6", filepath: './songs/6.mp3', cover:'covers/6.jpg'},
    {songName:"Salam-e-Ishq7", filepath: './songs/7.mp3', cover:'covers/7.jpg'},
    {songName:"Salam-e-Ishq8", filepath: './songs/8.mp3', cover:'covers/8.jpg'},
    {songName:"Salam-e-Ishq9", filepath: './songs/9.mp3', cover:'covers/9.jpg'},
    {songName:"Salam-e-Ishq10", filepath: './songs/10.mp3', cover:'covers/10.jpg'},
]

songItems.forEach((element,i)=>{
element.getElementsByTagName('img')[0].src=songs[i].cover
element.getElementsByClassName('songName')[0].innerText=songs[i].songName
})

// audioElement.play();

// handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle')
        masterPlay.classList.add('fa-pause-circle')
        gift.style.opacity='1'
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle')
        masterPlay.classList.add('fa-play-circle')
        gift.style.opacity='0'

    }
})

// listen to events
audioElement.addEventListener('timeupdate',()=>{
    // update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100)
    myProgressBar.value= progress ;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime= myProgressBar.value*audioElement.duration/100
})

const makeAllaplay = ()=>{
 Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
     element.classList.remove('fa-pause-circle')
    element.classList.add('fa-play-circle')

})
}

 Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllaplay();
        songIndex = parseInt(e.target.id)
        e.target.classList.remove('fa-play-circle')
        e.target.classList.add('fa-pause-circle')
        audioElement.src = `./songs/${songIndex}.mp3`
        mastersongname.innerText = songs[songIndex].songName
        audioElement.currentTime = 0;
        audioElement.play();
        gift.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle')
        masterPlay.classList.add('fa-pause-circle')
    })
 })

 document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=9){
songIndex = 0;
    }
    else{
        songIndex+=1;
    }
    audioElement.src = `./songs/${songIndex}.mp3`
    mastersongname.innerText = songs[songIndex].songName
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle')
    masterPlay.classList.add('fa-pause-circle')

 })

 document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
songIndex = 0;
    }
    else{
        songIndex-=1;
    }
    audioElement.src = `./songs/${songIndex}.mp3`
    mastersongname.innerText = songs[songIndex].songName
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle')
    masterPlay.classList.add('fa-pause-circle')

 })

