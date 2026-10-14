/* Só carrega o player externo depois de uma ação explícita do visitante. */
'use strict';
document.querySelectorAll('.dg-trailer-button').forEach((button) => {
  button.addEventListener('click', () => {
    const id = button.dataset.videoId;
    if (!/^[A-Za-z0-9_-]{11}$/.test(id || '')) return;
    const player = document.createElement('iframe');
    player.src = `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`;
    player.title = button.dataset.videoTitle || 'Dawn Gambit trailer';
    player.allow = 'autoplay; encrypted-media; picture-in-picture; fullscreen';
    player.allowFullscreen = true;
    player.referrerPolicy = 'strict-origin-when-cross-origin';
    button.parentElement.replaceChildren(player);
    player.focus();
  }, { once: true });
});
