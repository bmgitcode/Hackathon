document.addEventListener('onclick', () => {
  // const video = document.getElementsByClassName("video-stream html5-main-video");
  const content = document.querySelector('.wrap')
  const ingredients = document.querySelector("#wprm-recipe wprm-recipe-template-custom");

  document.insertBefore(ingredients, content.firstChild)


 });


//  const video = document.getElementsByClassName("video-stream html5-main-video");
//  const video = document.querySelector(".video");

//   window.addEventListener('keydown', (e) => {
//     if (e.code === 'g') {
//       decreasePlayback();
//     };
//   });

//   window.addEventListener('keydown', (e) => {
//     if (e.code === 'h') {
//       increasePlayback();
//     };
//   });

//   window.addEventListener('keydown', (e) => {
//     if (e.code === 'r') {
//       resetPlayback();
//     };
//   });

//   function increasePlayback () = {
//     video.playbackRate += 0.1;
//   }

//   function decreasePlayback () = {
//     video.playbackRate -= 0.1;
//   }

//   function resetPlayback () = {
//     video.playbackRate = 1.0;
//   }
