let imageList  = [
    {
        name: 'image-1',
        path: './images/test-image-1.jpg',
        source: 'real',
    },
    {
        name: 'image-2',
        path: './images/test-image-2.jpg',
        source: 'real',
    },
    {
        name: 'image-3',
        path: './images/test-image-3.jpg',
        source: 'AI',
    },
];

const imageDisplay = document.getElementById('image_display');
const submitButtons = document.getElementsByClassName('submit_button');
let chosenImage = {};

window.onload = () => {
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


