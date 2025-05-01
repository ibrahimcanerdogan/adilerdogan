// Mobil menü toggle
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');

window.addEventListener("load", function () {
    document.body.classList.add("loaded");
});

burger.addEventListener('click', () => {
    nav.classList.toggle('active');
    
    // Burger animasyonu
    burger.classList.toggle('toggle');
    
    // Link animasyonları
    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
    });
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
        
        // Mobil menüyü kapat
        if (nav.classList.contains('active')) {
            nav.classList.remove('active');
            burger.classList.remove('toggle');
        }
    });
});

// Sayfa yüklendiğinde header'ı şeffaf yap
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
    } else {
        header.style.background = '#fff';
    }
});

// Slider fonksiyonları
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const dotsContainer = document.querySelector('.slider-dots');
const prevButton = document.querySelector('.prev-slide');
const nextButton = document.querySelector('.next-slide');

let currentSlide = 0;
let slideInterval;

// Noktaları oluştur
slides.forEach((_, index) => {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    if (index === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goToSlide(index));
    dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll('.dot');

// Slider'ı başlat
function startSlider() {
    slideInterval = setInterval(nextSlide, 5000);
}

// Slider'ı durdur
function stopSlider() {
    clearInterval(slideInterval);
}

// Sonraki slayta geç
function nextSlide() {
    goToSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
}

// Önceki slayta geç
function prevSlide() {
    goToSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
}

// Belirli bir slayta git
function goToSlide(n) {
    currentSlide = n;
    slider.style.transform = `translateX(-${currentSlide * 100}%)`;
    
    // Noktaları güncelle
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
    });
}

// Event listeners
prevButton.addEventListener('click', () => {
    stopSlider();
    prevSlide();
    startSlider();
});

nextButton.addEventListener('click', () => {
    stopSlider();
    nextSlide();
    startSlider();
});

// Slider'a hover olduğunda durdur
slider.addEventListener('mouseenter', stopSlider);
slider.addEventListener('mouseleave', startSlider);

// Slider'ı başlat
startSlider(); 