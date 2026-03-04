export const smoothNavigate = (targetId: string) => {
  const overlay = document.createElement('div');
  overlay.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #000;
    z-index: 9999;
    pointer-events: none;
    animation: blinkClose 0.4s ease-in-out;
  `;
  
  document.body.appendChild(overlay);
  
  setTimeout(() => {
    const element = document.querySelector(targetId);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'auto' });
    }
    
    overlay.style.animation = 'blinkOpen 0.4s ease-in-out';
    setTimeout(() => overlay.remove(), 400);
  }, 400);
};
