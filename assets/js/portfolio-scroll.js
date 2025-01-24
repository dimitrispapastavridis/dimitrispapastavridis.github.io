document.addEventListener('DOMContentLoaded', function() {
    const portfolioGrid = document.querySelector('.portfolio-grid');
    const scrollLeftBtn = document.querySelector('.scroll-left');
    const scrollRightBtn = document.querySelector('.scroll-right');
    const articles = document.querySelectorAll('.portfolio-grid article');
    
    let currentIndex = 0;

    scrollRightBtn.addEventListener('click', () => {
        // Hide first article
        articles[currentIndex].classList.add('hidden');
        
        // Move to next index
        currentIndex = (currentIndex + 1) % articles.length;
        
        // Show new article
        articles[currentIndex].classList.remove('hidden');
    });

    scrollLeftBtn.addEventListener('click', () => {
        // Hide first article
        articles[currentIndex].classList.add('hidden');
        
        // Move to previous index
        currentIndex = (currentIndex - 1 + articles.length) % articles.length;
        
        // Show new article
        articles[currentIndex].classList.remove('hidden');
    });
});
