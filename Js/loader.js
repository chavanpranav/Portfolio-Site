const video = document.querySelector(".bg-video");
const loader = document.querySelector(".loader");

video.addEventListener("canplaythrough", () => {
    loader.style.opacity = "0";
    setTimeout(() => {
        loader.style.display = "none";
    }, 600);
});