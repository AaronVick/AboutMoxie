const images = [
    "https://www.aaronvick.com/Moxie/moxiecover.png",
    "https://www.aaronvick.com/Moxie/moxie2.png",
    "https://www.aaronvick.com/Moxie/moxie3.png",
    "https://www.aaronvick.com/Moxie/moxie4.png",
    "https://www.aaronvick.com/Moxie/moxie5.png",
    "https://www.aaronvick.com/Moxie/moxie6.png"
];

let currentIndex = 0;

function updateImage() {
    const imageElement = document.getElementById('moxieImage');
    imageElement.src = images[currentIndex];

    const nextButton = document.getElementById('nextButton');

    // Update the next button based on the current index
    if (currentIndex === images.length - 1) {
        nextButton.innerText = 'Check Your Moxie';
        nextButton.onclick = () => {
            window.location.href = 'https://moxie-frames.airstack.xyz/ctar';
        };
    } else {
        nextButton.innerText = 'Next';
        nextButton.onclick = nextImage;
    }
}

function nextImage() {
    if (currentIndex < images.length - 1) {
        currentIndex++;
        updateImage();
    }
}

window.onload = () => {
    updateImage();
};
