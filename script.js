

function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    document.body.appendChild(heart);

    // Randomize the fall duration for each heart
    const animationDuration = Math.random() * 3 + 2; // Between 2 and 3 seconds

    heart.style.animationDuration = `${animationDuration}s`;
    heart.style.animationTimingFunction = 'linear';
    heart.style.animationName = 'fall';
    heart.style.animationFillMode = 'forwards';

    // Randomize the starting horizontal position within the viewport width
    const maxStartPosition = window.innerWidth - heart.offsetWidth; // Ensure heart doesn't overflow the viewport
    heart.style.left = `${Math.random() * maxStartPosition}px`;

    // Adjust the size of the heart
    //const heartSize = Math.random() * (20 - 10) + 10; // Between 10px and 20px
    //heart.style.width = `${heartSize}px`;
    //heart.style.height = `${heartSize}px`;

    // Set a timeout to remove the heart after it has fallen
    setTimeout(() => {
        heart.remove();
    }, animationDuration * 1000); // Convert to milliseconds
}

document.getElementById('yesBtn').addEventListener('click', function () {
    const heartsCount = 50; // Number of hearts to create
    for (let i = 0; i < heartsCount; i++) {
        // Create a heart with a slight delay between each
        setTimeout(createHeart, i * 20);
    }
});


document.getElementById('noBtn').addEventListener('click', function () {
    for (let i = 0; i < 50; i++) { // Create 100 emojis
        createEmoji();
    }
});

function createEmoji() {
    const emoji = document.createElement('div');
    emoji.className = 'emoji';
    emoji.textContent = '😎'; // Angry emoji
    document.body.appendChild(emoji);

    // Apply similar styling and animation as for the hearts
    const animationDuration = Math.random() * 3 + 2; // Between 2 and 5 seconds
    emoji.style.animationDuration = `${animationDuration}s`;
    const maxStartPosition = window.innerWidth - emoji.offsetWidth; // Ensure emoji doesn't overflow the viewport
    emoji.style.left = `${Math.random() * maxStartPosition}px`;

    // Optional: Apply any specific styles you want for the emoji
    emoji.style.position = 'absolute';
    emoji.style.userSelect = 'none'; // Prevent the emoji from being selected

    setTimeout(() => {
        emoji.remove();
    }, animationDuration * 1000); // Convert to milliseconds
}


function showToast(message) {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.classList.add('toast');
    toast.textContent = message;

    // Add the toast to the container
    container.appendChild(toast);

    // Make the toast visible
    setTimeout(() => {
        toast.style.opacity = 1;
        toast.style.transform = 'translateY(0)';
    }, 100);

    // Automatically remove the toast after 3 seconds
    setTimeout(() => {
        toast.style.opacity = 0;
        toast.style.transform = 'translateY(20px)';
        toast.addEventListener('transitionend', () => toast.remove());
    }, 3000);
}

document.getElementById('yesBtn').addEventListener('click', function () {
    showToast('Yay! You said yes!😍');
});

document.getElementById('noBtn').addEventListener('click', function () {
    this.style.display = 'none'; // Hide the "No" button
    showToast('Nope, wrong answer baby, try again! 😎');
});
