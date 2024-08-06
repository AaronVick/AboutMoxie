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
    console.log("Updating image to:", images[currentIndex]);
    imageElement.src = images[currentIndex];
    
    const backButton = document.getElementById('backButton');
    const nextButton = document.getElementById('nextButton');

    if (currentIndex === 0) {
        backButton.style.display = 'none';
    } else {
        backButton.style.display = 'inline-block';
    }

    if (currentIndex === images.length - 1) {
        nextButton.innerText = 'Check Your Moxie';
        nextButton.onclick = () => {
            console.log("Redirecting to Moxie Check");
            window.location.href = 'https://moxie-frames.airstack.xyz/ctar';
        };
        
        const tokenButton = document.createElement('button');
        tokenButton.innerText = "Aaron's Token";
        tokenButton.onclick = () => {
            console.log("Redirecting to Aaron's Token");
            window.location.href = 'https://moxie-frames.airstack.xyz/sufta?t=235';
        };
        tokenButton.style.marginLeft = '10px';
        if (!document.getElementById('tokenButton')) {
            tokenButton.id = 'tokenButton';
            document.querySelector('.nav-buttons').appendChild(tokenButton);
        }
    } else {
        nextButton.innerText = 'Next';
        nextButton.onclick = nextImage;
        
        const tokenButton = document.getElementById('tokenButton');
        if (tokenButton) {
            tokenButton.remove();
        }
    }
}

function nextImage() {
    console.log("Next button clicked, currentIndex:", currentIndex);
    if (currentIndex < images.length - 1) {
        currentIndex++;
        updateImage();
    }
}

function prevImage() {
    console.log("Back button clicked, currentIndex:", currentIndex);
    if (currentIndex > 0) {
        currentIndex--;
        updateImage();
    }
}

window.onload = () => {
    console.log("Window loaded, initializing...");
    updateImage();
};
