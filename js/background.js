const images = [
    "0.jpg",
    "1.jpg",
    "2.jpg"
];

const chosenImage = images[Math.floor(Math.random() * images.length)]

//const bgImage = document.createElement("img");

const bgImage = `"img/${chosenImage}"`;

document.body.style.background = `url(img/${chosenImage}) no-repeat center center fixed`;