document.querySelectorAll('.light-img').forEach(img => {
  img.addEventListener('click', () => {
    const src = img.src;
    const overlay = document.createElement('div');
    const modalImg = document.createElement('img');
    overlay.id = 'lightbox-overlay';
    modalImg.src = src;
    overlay.appendChild(modalImg);
    document.body.appendChild(overlay);
    overlay.addEventListener('click', () => overlay.remove());
  });
});