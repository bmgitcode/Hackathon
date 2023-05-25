// document.addEventListener('onClick', () => {

//   const ingredients = document.querySelector("#mntl-structured-ingredients_1-0");



//  });

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
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZd4RoSRgfm6M32bd18VQdcVEzx8vPnpeHAg&usqp=CAU",
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
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZd4RoSRgfm6M32bd18VQdcVEzx8vPnpeHAg&usqp=CAU",
  "https://eatliver.b-cdn.net/wp-content/uploads/2021/01/corgi-butt21.jpg"
]

const youtubeImages = document.getElementsByTagName("img")
// const youtubeImages = document.querySelector('yt-core-image--fill-parent-height yt-core-image--fill-parent-width yt-core-image yt-core-image--content-mode-scale-aspect-fill yt-core-image--loaded')

for (let i = 0; i< youtubeImages.length; i++){
  const randomized = Math.floor(Math.random() * images.length)
  youtubeImages[i].src = images[randomized];
}
