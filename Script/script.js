document.querySelectorAll('.gallery-item').forEach((item) => {
    item.addEventListener('click', event => {
        const modal = document.getElementById('imageModal');
        const modalImg = document.getElementById('modalImage');
        const modalTitle = document.getElementById('modalTitle');
        const modalDescription = document.getElementById('modalDescription');

        modal.classList.add('show');
        modalImg.src = event.currentTarget.querySelector('img').src;
        modalTitle.textContent = event.currentTarget.dataset.title;
        modalDescription.textContent = event.currentTarget.dataset.description;

        // Apply zoom-in effect on modal image
        modalImg.style.transform = 'scale(0.8)';
        setTimeout(() => {
            modalImg.style.transform = 'scale(1)';
        }, 100);
    });
});

document.getElementById('closeBtn').addEventListener('click', () => {
    const modal = document.getElementById('imageModal');
    modal.classList.remove('show');
});
