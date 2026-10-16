
document.addEventListener("DOMContentLoaded", () => {
    const carousel = document.querySelector(".featured-project-list");
    const previousButton = document.querySelector(
        '[aria-label="Previous projects"]'
    );
    const nextButton = document.querySelector(
        '[aria-label="Next projects"]'
    );

    if (!carousel || !previousButton || !nextButton) {
        return;
    }

    function moveCarousel(direction) {
        const card = carousel.querySelector(".featured-card");

        if (!card) {
            return;
        }

        const gap = parseFloat(getComputedStyle(carousel).gap) || 0;
        const distance = card.getBoundingClientRect().width + gap;

        carousel.scrollBy({
            left: direction * distance,
            behavior: "smooth"
        });
    }

    previousButton.addEventListener("click", () => {
        moveCarousel(-1);
    });

    nextButton.addEventListener("click", () => {
        moveCarousel(1);
    });
});
