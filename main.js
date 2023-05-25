

let images = [
  "https://sadanduseless.b-cdn.net/wp-content/uploads/2019/05/funny-corgi-butts4.jpg",
  "https://i.chzbgr.com/full/9441876224/h39F6DD50/wheel",
  "https://sadanduseless.b-cdn.net/wp-content/uploads/2019/05/funny-corgi-butts2.jpg",
  "https://ih1.redbubble.net/image.911712648.8630/fposter,small,wall_texture,product,750x1000.jpg",
  "https://sadanduseless.b-cdn.net/wp-content/uploads/2019/05/funny-corgi-butts5.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZd4RoSRgfm6M32bd18VQdcVEzx8vPnpeHAg&usqp=CAU",
  "https://sadanduseless.b-cdn.net/wp-content/uploads/2019/05/funny-corgi-butts4.jpg",
  "https://i.chzbgr.com/full/9441876224/h39F6DD50/wheel",
  "https://sadanduseless.b-cdn.net/wp-content/uploads/2019/05/funny-corgi-butts2.jpg",
  "https://ih1.redbubble.net/image.911712648.8630/fposter,small,wall_texture,product,750x1000.jpg",
  "https://sadanduseless.b-cdn.net/wp-content/uploads/2019/05/funny-corgi-butts5.jpg",
  "https://preview.redd.it/aizkmknp941b1.jpg?auto=webp&v=enabled&s=329386c6452a2c84fe6da3fbd78a30b1d5f9c8b0",
  "https://sadanduseless.b-cdn.net/wp-content/uploads/2019/05/funny-corgi-butts4.jpg",
  "https://i.chzbgr.com/full/9441876224/h39F6DD50/wheel",
  "https://preview.redd.it/l9ooxh6pt9na1.jpg?auto=webp&v=enabled&s=a1c41f65a2c37ccea305306a23600b22602ce71f",
  "https://ih1.redbubble.net/image.911712648.8630/fposter,small,wall_texture,product,750x1000.jpg",
  "https://sadanduseless.b-cdn.net/wp-content/uploads/2019/05/funny-corgi-butts5.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZd4RoSRgfm6M32bd18VQdcVEzx8vPnpeHAg&usqp=CAU",
  "https://preview.redd.it/gu8qo8fxvnza1.jpg?auto=webp&v=enabled&s=e996b394ab12b2818a3513fcf5d7b9938a368fe8",
  "https://i.chzbgr.com/full/9441876224/h39F6DD50/wheel",
  "https://sadanduseless.b-cdn.net/wp-content/uploads/2019/05/funny-corgi-butts2.jpg",
  "https://ih1.redbubble.net/image.911712648.8630/fposter,small,wall_texture,product,750x1000.jpg",
  "https://sadanduseless.b-cdn.net/wp-content/uploads/2019/05/funny-corgi-butts5.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZd4RoSRgfm6M32bd18VQdcVEzx8vPnpeHAg&usqp=CAU",
  "https://eatliver.b-cdn.net/wp-content/uploads/2021/01/corgi-butt21.jpg",
  "https://preview.redd.it/aizkmknp941b1.jpg?auto=webp&v=enabled&s=329386c6452a2c84fe6da3fbd78a30b1d5f9c8b0",
  "https://preview.redd.it/gu8qo8fxvnza1.jpg?auto=webp&v=enabled&s=e996b394ab12b2818a3513fcf5d7b9938a368fe8",
  "https://preview.redd.it/l9ooxh6pt9na1.jpg?auto=webp&v=enabled&s=a1c41f65a2c37ccea305306a23600b22602ce71f",
  "https://preview.redd.it/ccr2nvur4yma1.jpg?auto=webp&v=enabled&s=914d14684ce5bbda86f6fff448e2c9ad6bad3e76"

]

const youtubeImages = document.getElementsByTagName("img")
// const youtubeImages = document.querySelector('yt-core-image--fill-parent-height yt-core-image--fill-parent-width yt-core-image yt-core-image--content-mode-scale-aspect-fill yt-core-image--loaded')

for (let i = 0; i< youtubeImages.length; i++){
  const randomized = Math.floor(Math.random() * images.length)
  youtubeImages[i].src = images[randomized];
}


// onscrolldown func
// call on scroll
