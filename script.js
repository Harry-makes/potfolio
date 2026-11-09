const button = document.querySelector('.menu-toggle');
const menu = document.querySelector('#main-nav');
button?.addEventListener('click', () => {
  const open = button.getAttribute('aria-expanded') !== 'true';
  button.setAttribute('aria-expanded', String(open));
  button.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  menu.classList.toggle('open', open);
});
menu?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  menu.classList.remove('open');
  button?.setAttribute('aria-expanded', 'false');
}));
document.getElementById('year').textContent = new Date().getFullYear();


// Preview Instagram/Facebook reels on demand only. A direct link to the original
// always remains available for cases where social embeds are restricted.
(() => {
  const modal = document.getElementById('reel-modal');
  if (!modal) return;
  const frame = document.getElementById('reel-frame');
  const original = document.getElementById('reel-modal-original');
  const closeButton = modal.querySelector('.modal-close');
  let restoreFocus = null;
  function closePreview() {
    modal.hidden = true;
    frame.replaceChildren();
    document.body.classList.remove('modal-open');
    if (restoreFocus) restoreFocus.focus();
  }
  for (const button of document.querySelectorAll('.preview-reel')) {
    button.addEventListener('click', () => {
      restoreFocus = button;
      const url = button.dataset.url;
      const platform = button.dataset.platform;
      original.href = url;
      const iframe = document.createElement('iframe');
      iframe.title = 'Reel preview — original video on '+platform;
      iframe.setAttribute('loading','eager');
      iframe.setAttribute('allow','autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share');
      iframe.setAttribute('allowfullscreen','');
      iframe.setAttribute('referrerpolicy','strict-origin-when-cross-origin');
      if (platform === 'instagram') {
        iframe.src = url.replace(/\/?$/, '/embed/');
      } else {
        iframe.src = 'https://www.facebook.com/plugins/video.php?href='+encodeURIComponent(url)+'&show_text=false&width=380';
      }
      frame.replaceChildren(iframe);
      modal.hidden = false;
      document.body.classList.add('modal-open');
      closeButton.focus();
    });
  }
  closeButton.addEventListener('click',closePreview);
  modal.querySelector('[data-close-modal]').addEventListener('click',closePreview);
  window.addEventListener('keydown',e=>{if(e.key==='Escape' && !modal.hidden)closePreview()});
  // Keep keyboard focus in the video overlay while open.
  modal.addEventListener('keydown',e=>{
    if(e.key!=='Tab')return;
    const candidates=[closeButton,original].filter(el=>!el.disabled);
    if(e.shiftKey && document.activeElement===candidates[0]){e.preventDefault();candidates.at(-1).focus()}
    else if(!e.shiftKey && document.activeElement===candidates.at(-1)){e.preventDefault();candidates[0].focus()}
  });
})();
