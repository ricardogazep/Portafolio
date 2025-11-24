// Animaciones con Motion One al hacer scroll

const items = document.querySelectorAll(".experiencia-item");

items.forEach((item, index) => {
    const delay = index * 0.2;

    const animateItem = () => {
        motion.animate(
            item,
            { opacity: [0, 1], transform: ["translateY(40px)", "translateY(0px)"] },
            { duration: 0.8, easing: "ease-out", delay: delay }
        );
    };

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    animateItem();
                    observer.unobserve(item);
                }
            });
        },
        { threshold: 0.2 }
    );

    observer.observe(item);
});