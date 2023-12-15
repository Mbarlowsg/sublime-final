import {imageList} from "./modules/imageList.mjs";
console.log("test")
const imageDisplay = document.getElementById('image_display'); // div to contain image
const submitButtons = document.getElementsByClassName('submit_button');
let chosenImage = {};

window.onload = () => {
    // Setup buttons
    for (let button of submitButtons) {
        button.addEventListener('click', () => {
            checkImage(chosenImage, button);
            chooseImage();
        })
    }

    chooseImage();
}



function checkImage(image, button) {
    if (image.source === 'real'){
        button.value === "real" ? console.log("correct") : console.log("wrong");
    } else if (image.source === 'AI'){ 
        button.value === "fake" ? console.log("correct") : console.log("wrong");

    }
}

function chooseImage() {
    chosenImage = imageList[Math.floor(Math.random() * 3)];    
    imageDisplay.innerHTML = `
        <img src="${chosenImage.path}"/>
        `
}


