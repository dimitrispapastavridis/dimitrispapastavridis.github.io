document.addEventListener('DOMContentLoaded', function() {
    const portfolioGrid = document.querySelector('.portfolio-grid');
    const scrollLeftBtn = document.querySelector('.scroll-left');
    const scrollRightBtn = document.querySelector('.scroll-right');
    const articleWidth = document.querySelector('.portfolio-grid article').offsetWidth;
    let currentScroll = 0;
    const maxScroll = portfolioGrid.scrollWidth - portfolioGrid.clientWidth;

    scrollRightBtn.addEventListener('click', () => {
        currentScroll += articleWidth;
        if (currentScroll > maxScroll) {
            currentScroll = 0; // Reset to start when reaching the end
        }
        portfolioGrid.style.transform = `translateX(-${currentScroll}px)`;
    });

    scrollLeftBtn.addEventListener('click', () => {
        currentScroll -= articleWidth;
        if (currentScroll < 0) {
            // Find the last visible position when at the start
            currentScroll = portfolioGrid.scrollWidth - portfolioGrid.clientWidth;
        }
        portfolioGrid.style.transform = `translateX(-${currentScroll}px)`;
    });
});