document.addEventListener('DOMContentLoaded', () => {
  // const video = document.getElementsByClassName("video-stream html5-main-video");
  const video = document.querySelector("movie_player");

  video.addEventListener('keydown', (e) => {
    if (e.code === 'g') {
      video.playbackRate -= 0.5;
    };
  });
  
  video.addEventListener('keydown', (e) => {
    if (e.code === 'h') {
      video.playbackRate = 10;
    };
  });

  video.addEventListener('keydown', (e) => {
    if (e.code === 'r') {
      video.playbackRate = 1.0;
    };
  });
  // bind keystroke to speed up, speed down, reset. x .1 increments
});