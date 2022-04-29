import Player from '@vimeo/player';
const vimeoPlayer = document.querySelector('iframe');
const player = new Player('vimeo-player');
const LOCALSTORAGE_KEY = "videoplayer-current-time";


const currentTime = () => {
    console.log(player.getCurrentTime().resolve);
} 



player.on('pause', currentTime)


// player.on('timeupdate', localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(seconds )))


// const playerSeconds = localStorage.getItem(LOCALSTORAGE_KEY);

// if (playerSeconds) {
//   player.setCurrentTime(parseFloat(playerSeconds));
// }


