function openMenu() {
    document.body.classList.add("menu--open");
}

function closeMenu() {
    document.body.classList.remove("menu--open");
}

document.addEventListener("DOMContentLoaded", function () {
    const testimonialTitle = document.getElementById("testimonial-title");
    const testimonialText = document.getElementById("testimonial-text");
    const testimonialAvatar = document.getElementById("testimonial-avatar");
    const testimonialName = document.getElementById("testimonial-name");
    const testimonialRole = document.getElementById("testimonial-role");
    const testimonialPrev = document.getElementById("testimonial-prev");
    const testimonialNext = document.getElementById("testimonial-next");

    if (
        !testimonialTitle ||
        !testimonialText ||
        !testimonialAvatar ||
        !testimonialName ||
        !testimonialRole ||
        !testimonialPrev ||
        !testimonialNext
    ) {
        return;
    }

    const testimonials = [
        {
            title: "Amazing User Experience",
            text:
                "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
            avatar: "./assets/photo-1494790108377-be9c29b29330.avif",
            name: "Charlotte Hale",
            role: "Director, Delos Inc.",
        },
        {
            title: "Fast Results, Great Support",
            text:
                "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam. Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
            avatar: "./assets/Screenshot 2026-07-11 131943.png",
            name: "Ava Brooks",
            role: "Head of Product, Nova Labs",
        },
    ];

    let currentIndex = 0;

    function renderTestimonial() {
        const currentTestimonial = testimonials[currentIndex];

        testimonialTitle.textContent = currentTestimonial.title;
        testimonialText.textContent = currentTestimonial.text;
        testimonialAvatar.src = currentTestimonial.avatar;
        testimonialAvatar.alt = currentTestimonial.name;
        testimonialName.textContent = currentTestimonial.name;
        testimonialRole.textContent = currentTestimonial.role;
    }

    testimonialPrev.addEventListener("click", function () {
        currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
        renderTestimonial();
    });

    testimonialNext.addEventListener("click", function () {
        currentIndex = (currentIndex + 1) % testimonials.length;
        renderTestimonial();
    });

    renderTestimonial();
});