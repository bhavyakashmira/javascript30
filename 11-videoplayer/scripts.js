const player = document.querySelector('.player')
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressbar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider'); 


function toggleplay() {
    if (video.paused) {
        video.play();
        toggle.textContent = " ||";
    } else {
        video.pause();
        toggle.textContent = "|>"
    }
   
}

function skip() {
    video.currentTime += parseFloat(this.dataset.skip)
}

function handlerange() {
     console.log(this.value);
     
}

function handleprogress() {
    const percent = (video.currentTime/ video.duration)*100;
    progressbar.style.flexBasis = `${percent}%`
}

function scrub(e) {
    const scrubtime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubtime 
    
}

ranges.forEach(ele => {
    ele.addEventListener('change' , handlerange)
});
ranges.forEach(ele => {
    ele.addEventListener('mousemove', handlerange)
});


video.addEventListener('click', toggleplay)
video.addEventListener('timeupdate' , handleprogress)
toggle.addEventListener('click', toggleplay)

progress.addEventListener('click' , scrub)

skipButtons.forEach(button => button.addEventListener('click', skip))
progress.addEventListener('mousemove'  , scrub)