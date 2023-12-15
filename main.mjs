import {imageList} from "./modules/imageList.mjs";

// DOM Elements
const result = document.getElementById("result");
const imageDisplay = document.getElementById('image_display'); // div to contain image
const submitButtons = document.getElementsByClassName('submit_button');
const displayedTotal = document.getElementById("total");
// Script variables
let chosenImage = {};
let totalImages = 0;
let totalCorrect = 0;

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
    if (image.source === "real"){
        button.value === "real" ? result.innerText = "Result: Correct": result.innerText = "Result: Wrong";
        if (button.value === "real"){
            result.innerText = "Result: Correct";
            totalImages++;
            totalCorrect++;
        } else {
            totalImages++;
            result.innerText = "Result: Wrong";
        }
    } else if (image.source === "AI"){ 
        button.value === "fake" ? result.innerText = "Result: Correct": result.innerText = "Result: Wrong";   
        if (button.value === "fake"){
            result.innerText = "Result: Correct";
            totalImages++;
            totalCorrect++;
        } else {
            totalImages++;
            result.innerText = "Result: Wrong";
        }
    }
    total.innerText = `Total: ${totalCorrect}/${totalImages}`
}

function chooseImage() {
    chosenImage = imageList[Math.floor(Math.random() * imageList.length)];    
    imageDisplay.innerHTML = `
        <img src="${chosenImage.path}"/>
        `
}


