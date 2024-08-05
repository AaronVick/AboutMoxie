const images = [
    "/moxiecover.png",
    "/moxie2.png",
    "/moxie3.png",
    "/moxie4.png",
    "/moxie5.png",
    "/moxie6.png"
];

let currentIndex = 0;

function updateImage() {
    const imageElement = document.getElementById('moxieImage');
    imageElement.src = images[currentIndex];
    
    const backButton = document.getElementById('backButton');
    const nextButton = document.getElementById('nextButton');

    backButton.style.display = currentIndex === 0 ? 'none' : 'inline-block';

    if (currentIndex === images.length - 1) {
        nextButton.innerText = 'Check Your Moxie';
        nextButton.onclick = () => window.location.href = 'https://moxie-frames.airstack.xyz/ctar';
        
        // Add Aaron's Token button when on the last image
        const tokenButton = document.createElement('button');
        tokenButton.innerText = "Aaron's Token";
        tokenButton.onclick = () => window.location.href = 'https://moxie-frames.airstack.xyz/sufta?t=235';
        tokenButton.style.marginLeft = '10px';
        if (!document.getElementById('tokenButton')) {
            tokenButton.id = 'tokenButton';
            document.querySelector('.nav-buttons').appendChild(tokenButton);
        }
    } else {
        nextButton.innerText = 'Next';
        nextButton.onclick = nextImage;
        
        // Remove Aaron's Token button if not on the last image
        const tokenButton = document.getElementById('tokenButton');
        if (tokenButton) {
            tokenButton.remove();
        }
    }
}

function nextImage() {
    if (currentIndex < images.length - 1) {
        currentIndex++;
        updateImage();
    }
}

function prevImage() {
    if (currentIndex > 0) {
        currentIndex--;
        updateImage();
    }
}

window.onload = updateImage;
