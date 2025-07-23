const coverWrapper = document.querySelector('.cover-wrapper');
const modal = document.getElementById('videoModal');
const closeButton = document.querySelector('.close-button');

coverWrapper.addEventListener('click', () => {
    modal.style.display = 'block';
});

closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
    // 停止视频播放
    const iframe = modal.querySelector('iframe');
    const iframeSrc = iframe.src;
    iframe.src = iframeSrc;
});

window.addEventListener('click', (event) => {
    if (event.target == modal) {
        modal.style.display = 'none';
        // 停止视频播放
        const iframe = modal.querySelector('iframe');
        const iframeSrc = iframe.src;
        iframe.src = iframeSrc;
    }
});