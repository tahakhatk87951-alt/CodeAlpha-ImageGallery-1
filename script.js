const galleryItems = document.querySelectorAll('.image-item img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.close');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentIndex = 0;

// Open Lightbox
galleryItems.forEach((img, index) => {
    img.addEventListener('click', () => {
        currentIndex = index;
        showImage(currentIndex);
        lightbox.style.display = 'flex';
    });
});

// Show Image Function
function showImage(index) {
    lightboxImg.src = galleryItems[index].src;
}

// Close Lightbox
closeBtn.onclick = () => lightbox.style.display = 'none';

// Next Image
nextBtn.onclick = () => {
    currentIndex = (currentIndex + 1) % galleryItems.length;
    showImage(currentIndex);
};

// Previous Image
prevBtn.onclick = () => {
    currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
    showImage(currentIndex);
};

// Close on clicking outside the image
lightbox.onclick = (e) => {
    if (e.target === lightbox) lightbox.style.display = 'none';
};