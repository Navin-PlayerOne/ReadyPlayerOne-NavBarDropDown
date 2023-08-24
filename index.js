const video = document.getElementById('backgroundVideo');
// const menuItems = document.getElementsByClassName('mega-menu');
video.playbackRate = 1.5;

menuItems.addEventListener('mouseenter', () => {
    console.log("happy")
    video.playbackRate = 0.5; 
});

menuItems.addEventListener('mouseleave', () => {
    video.playbackRate = 1.5;
});