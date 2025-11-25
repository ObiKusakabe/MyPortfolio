const previewOverlay = document.getElementById("imagePreview");
const previewImg = previewOverlay.querySelector("img");

// EVENT: klik gambar apapun di portofolio
document.querySelectorAll(".portfolio-img, #accordionSertif img").forEach(img => {
    img.addEventListener("click", () => {
        previewImg.src = img.src;
        previewOverlay.classList.add("active");
    });
});

// EVENT: klik backdrop → tutup
previewOverlay.addEventListener("click", () => {
    previewOverlay.classList.remove("active");
});

