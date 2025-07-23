document.addEventListener('DOMContentLoaded', function () {
    //Tracklist
    const tracks = [
        {
            title: "Welcome To New York",
            artist: "Taylor Swift",
            cover: "images/cover.png"
        },
        {
            title: "Blank Space",
            artist: "Taylor Swift",
            cover: "images/cover.png"
        },
        {
            title: "Style",
            artist: "Taylor Swift",
            cover: "images/cover.png"
        },
        {
            title: "Out Of The Woods",
            artist: "Taylor Swift",
            cover: "images/cover.png"
        },
        {
            title: "All You Had To Do Was Stay",
            artist: "Taylor Swift",
            cover: "images/cover.png"
        },
        {
            title: "Shake It Off",
            artist: "Taylor Swift",
            cover: "images/cover.png"
        },
        {
            title: "I Wish You Would",
            artist: "Taylor Swift",
            cover: "images/cover.png"
        },
        {
            title: "Bad Blood",
            artist: "Taylor Swift",
            cover: "images/cover.png"
        },
        {
            title: "Wildest Dreams",
            artist: "Taylor Swift",
            cover: "images/cover.png"
        },
        {
            title: "How You Get The Girl",
            artist: "Taylor Swift",
            cover: "images/cover.png"
        },
        {
            title: "This Love",
            artist: "Taylor Swift",
            cover: "images/cover.png"
        },
        {
            title: "I Know Places",
            artist: "Taylor Swift",
            cover: "images/cover.png"
        },
        {
            title: "Clean",
            artist: "Taylor Swift",
            cover: "images/cover.png"
        },
        {
            title: "Wonderland",
            artist: "Taylor Swift",
            cover: "images/cover.png"
        },
        {
            title: "You Are In Love",
            artist: "Taylor Swift",
            cover: "images/cover.png"
        },
        {
            title: "New Romantics",
            artist: "Taylor Swift",
            cover: "images/cover.png"
        }
    ];

    let currentTrackIndex = 0;
    const trackContainer = document.querySelector('.tracklist-track-container');
    const prevButton = document.querySelector('.tracklist-button.prev');
    const nextButton = document.querySelector('.tracklist-button.next');

    tracks.forEach(track => {
        let format = 'flac';

        if (track === tracks[13] || track === tracks[14] || track === tracks[15]) {
            format = 'mp3';
        }

        track.audioSrc = `audio/${track.title}.${format}`;
    });


    let audio = new Audio();
    let isPlaying = false;

    updateTrackDisplay();

    prevButton.addEventListener('click', function () {
        currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
        updateTrackDisplay();
    });

    nextButton.addEventListener('click', function () {
        currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
        updateTrackDisplay();
    });

    function updateTrackDisplay() {
        const currentTrack = tracks[currentTrackIndex];

        if (isPlaying) {
            audio.pause();
            isPlaying = false;
        }

        //update new HTML
        const trackHTML = `
        <div class="tracklist-track">
            <div class="track-cover">
                <img src="images/cover.png" alt="${currentTrack.title} Cover">
            </div>
            <div class="track-info">
                <div class="track-title">${currentTrack.title}</div>
                <div class="track-artist">${currentTrack.artist}</div>
            </div>
            <div class="play-button">
                <div class="play-icon"></div>
            </div>
        </div>`;

        trackContainer.style.opacity = 0;
        setTimeout(() => {
            trackContainer.innerHTML = trackHTML;
            trackContainer.style.opacity = 1;

            const playButton = document.querySelector('.play-button');

            playButton.addEventListener('click', function () {
                const currentTrack = tracks[currentTrackIndex];

                if (!isPlaying) {
                    audio.src = currentTrack.audioSrc;
                    audio.play();
                    isPlaying = true;
                    playButton.innerHTML = '<div class="pause-icon"></div>';
                } else {
                    audio.pause();
                    isPlaying = false;
                    playButton.innerHTML = '<div class="play-icon"></div>';
                }
            });
        }, 300);
    }

    const style = document.createElement('style');
    style.textContent = `
        .tracklist-track-container {
            transition: opacity 0.3s ease;
        }
    `;
    document.head.appendChild(style);
});

window.onload = function(){
    const userName = localStorage.getItem("userName");
    const password = localStorage.getItem("password");

    if(!userName || userName.trim() === ""
        || !password || password.trim() === ""
    ){
        console.log("No user is logged in.")
        return false;
    }

    document.getElementById("login").innerHTML = "HI, "+userName+"!";
}