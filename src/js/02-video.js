import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const vimeoPlayer = document.querySelector('iframe');
const player = new Player(vimeoPlayer);
const PLAYERCURRENTTIME_KEY = "videoplayer-current-time";
const currentTime = localStorage.getItem(PLAYERCURRENTTIME_KEY);

player.on('timeupdate', throttle(data => {
    localStorage.setItem(PLAYERCURRENTTIME_KEY, JSON.stringify(data.seconds));
}, 1000));

player.on('loaded', () => {
    player.setCurrentTime(currentTime);
})
