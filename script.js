// Mobile Menu Toggle
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');
if(menuToggle){
    menuToggle.addEventListener('click', ()=>navLinks.classList.toggle('show'));
}

// Slider Functionality
const slider = document.getElementById('slider');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
let index = 0;
if(slider){
    function showSlide(i){
        const slides = slider.children.length;
        if(i<0) index=slides-1;
        else if(i>=slides) index=0;
        else index=i;
        slider.style.transform = `translateX(${-index*310}px)`;
    }
    prevBtn.addEventListener('click', ()=>showSlide(index-1));
    nextBtn.addEventListener('click', ()=>showSlide(index+1));
    Array.from(slider.children).forEach(img=>{
        img.addEventListener('click', ()=>showSlide(Array.from(slider.children).indexOf(img)));
    });
}

// WhatsApp Buy T-shirt
function buyTshirt(){
    const phone = "94740802427";
    const message = "Hello, I want to buy a Gym T-Shirt.";
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank");
}

// WhatsApp Buy Personal Training Package
function buyPackage(packageName){
    const phone = "94740802427";
    const message = `Hello, I want to buy the ${packageName} Personal Training package.`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank");
}
// WhatsApp Buy T-shirt
function buyTshirt(){
    const phone = "94740802427"; // Your WhatsApp Number
    const message = "Hello, I want to buy the MyGym T-Shirt.";
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank");
}


// Lightbox functionality
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.lightbox .close');

// Open lightbox when any slider image is clicked
document.querySelectorAll('#slider img').forEach(img => {
    img.addEventListener('click', () => {
        lightbox.style.display = 'flex';
        lightboxImg.src = img.src;
    });
});

// Close lightbox
closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

// Close when clicking outside image
lightbox.addEventListener('click', e => {
    if(e.target === lightbox) lightbox.style.display = 'none';
});


// WhatsApp Buy Personal Training Package
function buyPackage(packageName){
    const phone = "94740802427"; // Your WhatsApp Number
    const message = `Hello, I want to buy the ${packageName} Personal Training package.`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank");
}

function sendWhatsApp(packageName, price) {
  const phoneNumber = "94740802427"; // Sri Lanka (no +, no 0)

  const message = `Hello Coach 👋

I want to join your gym.

📦 Package: ${packageName}
💰 Price: ${price}

Please send more details.`;

  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}
