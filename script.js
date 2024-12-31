// Card flip logic
document.getElementById("front").addEventListener("click", () => {
    document.getElementById("front").style.transform = "rotateY(-90deg)";
    setTimeout(() => {
        document.getElementById("page1").style.transform = "rotateY(0deg)";
    }, 500);
});

document.getElementById("page1").addEventListener("click", () => {
    document.getElementById("page1").style.transform = "rotateY(-90deg)";
    setTimeout(() => {
        document.getElementById("page2").style.transform = "rotateY(0deg)";
    }, 500);
});
