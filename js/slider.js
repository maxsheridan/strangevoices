document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;
    let currentIndex = 0;
    let interval;

    const nextSlide = () => {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateSlidePosition();
    };

    const prevSlide = () => {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        updateSlidePosition();
    };

    const updateSlidePosition = () => {
        requestAnimationFrame(() => {
            slider.style.transform = `translate3d(-${currentIndex * 100}%, 0, 0)`;
        });
    };

    const startAutoSlide = () => {
        interval = setInterval(nextSlide, 6000);
    };

    const stopAutoSlide = () => {
        clearInterval(interval);
    };

    document.querySelector('.arrow-left').addEventListener('click', () => {
        stopAutoSlide();
        prevSlide();
        startAutoSlide();
    });

    document.querySelector('.arrow-right').addEventListener('click', () => {
        stopAutoSlide();
        nextSlide();
        startAutoSlide();
    });

    slides.forEach(slide => {
        slide.addEventListener('click', () => {
            const url = slide.getAttribute('data-url');
            if (url) {
                window.location.href = url;
            }
        });
    });

    let startX = 0;
    let endX = 0;

    slider.addEventListener('touchstart', (event) => {
        startX = event.touches[0].clientX;
    });

    slider.addEventListener('touchmove', (event) => {
        endX = event.touches[0].clientX;
    });

    slider.addEventListener('touchend', () => {
        if (startX - endX > 50) {
            stopAutoSlide();
            nextSlide();
            startAutoSlide();
        } else if (endX - startX > 50) {
            stopAutoSlide();
            prevSlide();
            startAutoSlide();
        }
    });

    window.addEventListener('load', () => {
        setTimeout(() => {
            slider.style.transition = 'transform 0.5s ease-in-out';
            startAutoSlide();
        }, 100);
    });
});