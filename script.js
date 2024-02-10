document.getElementById('noBtn').addEventListener('click', function () {
    this.style.display = 'none'; // Hide the "No" button
    alert('Nope, wrong answer baby, try again!');
});

// Optional: Add some action when "Yes" is clicked
document.getElementById('yesBtn').addEventListener('click', function () {
    alert('Yay! You made my day!');
});
