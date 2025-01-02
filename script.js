document.querySelector('.card').addEventListener('click', function () {
    this.classList.toggle('flipped');
});

// Hide page2 content on initialization
window.onload = () => {
    document.getElementById('page2').style.opacity = "0";
    setTimeout(() => {
        document.getElementById('page2').style.opacity = "1";
    }, 800); // Ensure it's hidden for 0.8s (matching flip transition)
};
