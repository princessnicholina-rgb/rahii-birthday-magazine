const pages = document.querySelectorAll('.page');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const dotsContainer = document.getElementById('page-dots');

let currentPage = 0;

pages.forEach((_, index) => {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    if (index === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goToPage(index));
    dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll('.dot');

function showPage(index) {
    pages.forEach(p => p.classList.remove('active'));
    dots.forEach(d => d.classList.remove('active'));

    pages[index].classList.add('active');
    dots[index].classList.add('active');

    prevBtn.disabled = index === 0;
    nextBtn.disabled = index === pages.length - 1;

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function goToPage(index) {
    currentPage = index;
    showPage(currentPage);
}

prevBtn.addEventListener('click', () => {
    if (currentPage > 0) {
        currentPage--;
        showPage(currentPage);
    }
});

nextBtn.addEventListener('click', () => {
    if (currentPage < pages.length - 1) {
        currentPage++;
        showPage(currentPage);
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') nextBtn.click();
    if (e.key === 'ArrowLeft') prevBtn.click();
});

showPage(currentPage);