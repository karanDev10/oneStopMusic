
const music = new Audio('audio/english/1.mp3');
var editedWave = document.querySelector('.editedWave');
var videoWave = document.querySelector('.videoWave');

// music.play('audio/1.mp3');
let masterPlay = document.querySelector('#masterPlay');
masterPlay.addEventListener('click', () => {
    if (music.paused || music.currentTime <= 0) {
        music.play();
        editedWave.src = "images/wave.gif";
        masterPlay.classList.remove("fa-circle-play")
        masterPlay.classList.add("fa-circle-pause");


        // videoWave.style.removeProperty("display");


    }
    else {
        music.pause();
        masterPlay.classList.remove("fa-circle-pause")
        masterPlay.classList.add("fa-circle-play");
        editedWave.src = "images/editedWave.png";
        // play buttons


    }
})

// creating array

const songs = [
    {
        id: 1,
        songName: `Arcade<br>
        <div class="subtitle"> english</div>`,
        poster: "img/english/1.jpg",
    },
    {
        id: 2,
        songName: `closer<br>
        <div class="subtitle">english</div>`,
        poster: "img/english/2.jpg",
    },
    {
        id: 3,
        songName: `dandelions<br>
        <div class="subtitle">english </div>`,
        poster: "img/english/3.jpg",
    },
    {
        id: 4,
        songName: `be alright<br>
        <div class="subtitle">english</div>`,
        poster: "img/english/4.jpg",
    },
    {
        id: 5,
        songName: `heartbreak anniversary<br>
        <div class="subtitle">english</div>`,
        poster: "img/english/5.jpg",
    },
    {
        id: 6,
        songName: `heat waves<br>
        <div class="subtitle">english</div>`,
        poster: "img/english/6.jpg",
    },
    {
        id: 7,
        songName: `starboy<br>
        <div class="subtitle">english</div>`,
        poster: "img/english/7.jpg",
    },
    {
        id: 8,
        songName: `under th influence<br>
        <div class="subtitle">english</div>`,
        poster: "img/english/8.jpg",
    },
    {
        id: 9,
        songName: `calm down<br>
        <div class="subtitle">english</div>`,
        poster: "img/english/9.jpg",
    },
    {
        id: 10,
        songName: `bones<br>
        <div class="subtitle">english</div>`,
        poster: "img/english/10.jpg",
    }
]
// search data starts from here
let search_results = document.getElementsByClassName('search_results')[0];
songs.forEach(element => {
    const { id, songName, poster } = element;
    const card = document.createElement('a');
    card.classList.add('card');
    card.href = "#" + id;
    card.innerHTML = `<img src="${poster}" alt="">
    <div class="content">
     ${songName}
    </div>`;
    search_results.appendChild(card)

});

let input = document.getElementsByTagName('input')[0];
input.addEventListener('keyup', () => {
    let input_value = input.value.toUpperCase();
    // console.log(input_value)
    let items = search_results.getElementsByTagName('a');

    for (let index = 0; index < items.length; index++) {
        let as = items[index].getElementsByClassName('content')[0];
        // console.log(as)
        let text_value = as.textContent || as.innerHTML;
        // console.log(text_value);
        //  let updated_value = content_text_value.toUpperCase();
        // console.log(song_text_value)

        if (text_value.toUpperCase().indexOf(input_value) > -1) {
            items[index].style.display = "flex";
        }
        else {
            items[index].style.display = "none";
        }
        if (input_value.length === 0) {
            items[index].style.display = "";

        }
    }

})
// search data end
Array.from(document.getElementsByClassName('songItem')).forEach((e, i) => {
    e.getElementsByTagName('img')[0].src = songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;

    // console.log(i)
})
// backgroundhover when clicked songItems js
const backgroundHover = () => {
    Array.from(document.getElementsByClassName('songItem')).forEach((hov) => {
        hov.style.background = 'rgb(52,226,236, 0)';
    })
}
let AllPlaybutton = () => {
    Array.from(document.getElementsByClassName('listPlay')).forEach((val) => {
        val.classList.add("fa-circle-play");
        val.classList.remove("fa-circle-pause");
    })
}

// js for changing songs
let posterImgDownBar = document.querySelector('#posterImgDownBar');
let posterTitle = document.querySelector('#title');
let download_btn = document.getElementById('download_btn');


// let listPlay =document.getElementsByClassName('listPlay')[2]
let index = 0;
Array.from(document.getElementsByClassName('listPlay')).forEach((value) => {
    value.addEventListener('click', (el) => {
        index = el.target.id
        // console.log(index);
        music.src = `audio/english/${index}.mp3`
        music.play();
        //play button in posters

        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
        // for download
        download_btn.href = `audio/english/${index}.mp3`;
        // changing posters
        posterImgDownBar.src = `img/english/${index}.jpg`;
        // songTitles
        let newArray = songs.filter((obj) => {
            return obj.id == index;

        });
        // console.log(newArray);
        newArray.forEach((objvalue) => {
            let { songName } = objvalue;
            posterTitle.innerHTML = songName;
            download_btn.setAttribute('download', songName);

        });

        backgroundHover();
        Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = 'rgb(52,226,236, 1)';
        AllPlaybutton();
        Array.from(document.getElementsByClassName('listPlay'))[index - 1].classList.add('fa-circle-pause');
        editedWave.src = "images/wave.gif";

    })
})


// small arrow scroll key function
let smallLeftArrow = document.querySelector('#smallLeftArrow');
let smallRightArrow = document.querySelector('#smallRightArrow');
let item = document.querySelector('.item');

smallLeftArrow.addEventListener('click', () => {
    item.scrollLeft -= 300;
})

smallRightArrow.addEventListener('click', () => {
    item.scrollLeft += 300;
})
// main arrow scroll key function
let mainLeftArrow = document.querySelector('#mainLeftArrow');
let mainRightArrow = document.querySelector('#mainRightArrow');
let pop_song = document.querySelector('.pop_song');

mainLeftArrow.addEventListener('click', () => {
    pop_song.scrollLeft -= 400;
})

mainRightArrow.addEventListener('click', () => {
    pop_song.scrollLeft += 400;
})



// timer script


let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];

music.addEventListener('timeupdate', () => {
    let music_currentTime = music.currentTime;
    // console.log(music_currentTime);
    let music_duration = music.duration;
    // console.log(music_duration);
    let min1 = Math.floor(music_duration / 60);
    let sec1 = Math.floor(music_duration % 60);
    // console.log(min1);
    // console.log(sec1);
    if (sec1 < 10) {
        sec1 = `0${sec1}`;
    }
    currentEnd.innerText = `${min1}:${sec1}`;

    let min2 = Math.floor(music_currentTime / 60);
    let sec2 = Math.floor(music_currentTime % 60);
    if (sec2 < 10) {
        sec2 = `0${sec2}`;
    }

    currentStart.innerText = `${min2}:${sec2}`;
    let progressBar = parseInt((music_currentTime / music_duration) * 100);
    // console.log(progressBar);
    seek.value = progressBar;
    bar2.style.width = `${seek.value}%`;
    dot.style.left = `${seek.value}%`;


});
seek.addEventListener('change', () => {
    music.currentTime = seek.value * music.duration / 100;
})
// 
let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_bar = document.querySelector('.vol_bar');
let vol_dot = document.getElementById('vol_dot');

vol.addEventListener('change', () => {
    if (vol.value == 0) {
        vol_icon.classList.remove('bi-volume-up');
        vol_icon.classList.remove('bi-volume-down');
        vol_icon.classList.add('bi-volume-mute');

    }
    if (vol.value > 0) {
        vol_icon.classList.remove('bi-volume-up');
        vol_icon.classList.remove('bi-volume-mute');
        vol_icon.classList.add('bi-volume-down');
    }
    if (vol.value >= 50) {
        vol_icon.classList.remove('bi-volume-mute');
        vol_icon.classList.remove('bi-volume-down');
        vol_icon.classList.add('bi-volume-up');
    }
    let volume_control = vol.value;
    vol_bar.style.width = `${volume_control}%`;
    vol_dot.style.left = `${volume_control}%`;
    music.volume = volume_control / 100;
})

// next , back
let back = document.getElementById('back');
let next = document.getElementById('next');

back.addEventListener('click', () => {
    index -= 1;
    if (index < 1) {
        index = Array.from(document.getElementsByClassName('listPlay')).length;
    }
    music.src = `audio/english/${index}.mp3`
    music.play();
    //play button in posters
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
    // changing posters
    posterImgDownBar.src = `img/english/${index}.jpg`;
    // 
    let newArray = songs.filter((obj) => {
        return obj.id == index;
    });
    // console.log(newArray);
    newArray.forEach((objvalue) => {
        let { songName } = objvalue;
        posterTitle.innerHTML = songName;
    });

    backgroundHover();
    Array.from(document.getElementsByClassName('songItem'))[index - 1].
        style.background = 'rgb(52,226,236, 1)';
    AllPlaybutton();
    Array.from(document.getElementsByClassName('listPlay'))[index - 1].
        classList.add('fa-circle-pause');
    editedWave.src = "images/wave.gif";
});

// next
next.addEventListener('click', () => {
    index++;
    if (index == Array.from(document.getElementsByClassName('listPlay')).length + 1) {
        index = 1;
    }
    music.src = `audio/english/${index}.mp3`
    music.play();
    //play button in posters
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
    // changing posters
    posterImgDownBar.src = `img/${index}.jpg`;
    // 
    let newArray = songs.filter((obj) => {
        return obj.id == index;
    });
    // console.log(newArray);
    newArray.forEach((objvalue) => {
        let { songName } = objvalue;
        posterTitle.innerHTML = songName;
    });

    backgroundHover();
    Array.from(document.getElementsByClassName('songItem'))[index - 1].
        style.background = 'rgb(52,226,236, 1)';
    AllPlaybutton();
    Array.from(document.getElementsByClassName('listPlay'))[index - 1].
        classList.add('fa-circle-pause');
    editedWave.src = "images/wave.gif";
});

// shuffle songs using click function

let shuffle = document.getElementsByClassName('shuffle')[0];
shuffle.addEventListener('click', () => {
    let a = shuffle.innerHTML;
    switch (a) {
        case "next":
            shuffle.classList.add('bi-arrow-repeat');
            shuffle.classList.remove('bi-music-note-beamed');
            shuffle.classList.remove('bi-shuffle');
            shuffle.innerHTML = 'repeat';
            break;
        case "repeat":
            shuffle.classList.remove('bi-arrow-repeat');
            shuffle.classList.remove('bi-music-note-beamed');
            shuffle.classList.add('bi-shuffle');
            shuffle.innerHTML = 'shuffle';
            break;
        case "shuffle":
            shuffle.classList.remove('bi-arrow-repeat');
            shuffle.classList.add('bi-music-note-beamed');
            shuffle.classList.remove('bi-shuffle');
            shuffle.innerHTML = 'next';
            break;
    }
})
// copied music code from above section for same activity

music.addEventListener('ended', () => {
    let b = shuffle.innerHTML
    switch (b) {
        case "next":
            nextLoop();
            break;

        case "repeat":
            sameLoop();
            break;

        case "shuffle":
            shuffleLoop();
            break;
    }

})


// fuctions for nextsong using nextBtn 
let nextLoop = () => {
    if (index == songs.length) {
        index = 1;
    }
    else {
        index++;
    }
    music.src = `audio/english/${index}.mp3`
    music.play();
    //play button in posters
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
    // for download
    download_btn.href = `audio/english/${index}.mp3`;
    // changing posters
    posterImgDownBar.src = `img/english/${index}.jpg`;
    // songTitles
    let newArray = songs.filter((obj) => {
        return obj.id == index;
    });
    // console.log(newArray);
    newArray.forEach((objvalue) => {
        let { songName } = objvalue;
        posterTitle.innerHTML = songName;
        download_btn.setAttribute('download', songName);
    });
    backgroundHover();
    Array.from(document.getElementsByClassName('songItem'))[index - 1].
        style.background = 'rgb(52,226,236, 1)';
    AllPlaybutton();
    Array.from(document.getElementsByClassName('listPlay'))[index - 1].
        classList.add('fa-circle-pause');
    editedWave.src = "images/wave.gif";
}

let sameLoop = () => {
    index;
    music.src = `audio/english/${index}.mp3`
    music.play();
    //play button in posters
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
    // for download
    download_btn.href = `audio/english/${index}.mp3`;
    // changing posters
    posterImgDownBar.src = `img/english/${index}.jpg`;
    // songTitles
    let newArray = songs.filter((obj) => {
        return obj.id == index;
    });
    // console.log(newArray);
    newArray.forEach((objvalue) => {
        let { songName } = objvalue;
        posterTitle.innerHTML = songName;
        download_btn.setAttribute('download', songName);
    });
    backgroundHover();
    Array.from(document.getElementsByClassName('songItem'))[index - 1].
        style.background = 'rgb(52,226,236, 1)';
    AllPlaybutton();
    Array.from(document.getElementsByClassName('listPlay'))[index - 1].
        classList.add('fa-circle-pause');
    editedWave.src = "images/wave.gif";
}
let shuffleLoop = () => {
    if (index == songs.length) {
        index = 1;
    }
    else {
        index = Math.floor((Math.random() * songs.length) + 1);
    }
    // console.log(index);
    music.src = `audio/english/${index}.mp3`
    music.play();
    //play button in posters
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
    // for download
    download_btn.href = `audio/english/${index}.mp3`;
    // changing posters
    posterImgDownBar.src = `img/english/${index}.jpg`;
    // songTitles
    let newArray = songs.filter((obj) => {
        return obj.id == index;
    });
    // console.log(newArray);
    newArray.forEach((objvalue) => {
        let { songName } = objvalue;
        posterTitle.innerHTML = songName;
        download_btn.setAttribute('download', songName);
    });
    backgroundHover();
    Array.from(document.getElementsByClassName('songItem'))[index - 1].
        style.background = 'rgb(52,226,236, 1)';
    AllPlaybutton();
    Array.from(document.getElementsByClassName('listPlay'))[index - 1].
        classList.add('fa-circle-pause');
    editedWave.src = "images/wave.gif";
}


// sidebar btn design
let sideBtn = document.getElementById('side_barBtn')
let side = document.getElementsByClassName('side_bar')[0];
console.log(side);
sideBtn.addEventListener('click', () => {

    side.style.transform = "unset";
    sideBtn.style.opacity = 0;
    sol.style.opacity = 1;
    sol.style.display = "initial";
})
let sol = document.getElementById('sol')
sol.style.display = "none";
sol.addEventListener('click', () => {
    side.style.transform = "translate(-100%)";
    sideBtn.style.opacity = 1;
    sol.style.opacity = 0;
})